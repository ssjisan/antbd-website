import {
  Box,
  Container,
  Typography,
  InputAdornment,
  TextField,
  CircularProgress,
  Stack,
  Grid,
  Button,
} from "@mui/material";
import { useRef, useState } from "react";
import { GPS } from "./../../assets/Icons/Home/Icons";
import CoverageAnimation from "../Common/CoverageAnimation";

export default function CheckCoverage() {
  const mapRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateLocationFromCoordinates = async (lat, lng) => {
    handleMapClick(lat, lng);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      if (data?.display_name) setSearchQuery(data.display_name);
    } catch (err) {
      console.error("Reverse geocode error", err);
    }
  };

  const handleMapClick = async (lat, lng) => {
    if (mapRef.current) {
      await mapRef.current.handleClick(lat, lng);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length >= 5) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setSuggestions(data.slice(0, 5));
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  const handleSuggestionSelect = (place) => {
    setSearchQuery(place.display_name);
    setSuggestions([]);
    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lon);
    handleMapClick(lat, lng);
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported.");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        updateLocationFromCoordinates(latitude, longitude);
      },
      () => alert("Permission denied or failed to get location")
    );
  };

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack gap="4px" sx={{ mt: "48px" }}>
            <Typography variant="h3">Check Coverage</Typography>
            <Typography variant="h6" color="text.secondary">
              Find out if we’re available in your area today.
            </Typography>
          </Stack>

          <Stack sx={{ my: "32px" }} gap="24px">
            <TextField
              value={searchQuery}
              size="small"
              onChange={handleInputChange}
              placeholder="Search a location..."
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {loading && <CircularProgress size={20} />}
                  </InputAdornment>
                ),
              }}
            />

            {suggestions.length > 0 && (
              <Box
                sx={{
                  mt: 1,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  background: "#fff",
                  zIndex: 999,
                  position: "absolute",
                  width: "100%",
                  maxWidth: 500,
                  boxShadow: 2,
                }}
              >
                {suggestions.map((s, idx) => (
                  <Box
                    key={idx}
                    onClick={() => handleSuggestionSelect(s)}
                    sx={{
                      px: 2,
                      py: 1,
                      cursor: "pointer",
                      borderBottom:
                        idx < suggestions.length - 1
                          ? "1px solid #eee"
                          : "none",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    {s.display_name}
                  </Box>
                ))}
              </Box>
            )}

            <Typography variant="h6" mb={2}>
              Click anywhere on the map to get an address, or use
              <Button
                onClick={handleUseMyLocation}
                variant="contained"
                color="secondary"
                sx={{ mx: "8px" }}
              >
                <GPS color="#fff" size="20px" />
              </Button>
              to get your current location.
            </Typography>
          </Stack>
          <Button variant="contained">Check Availability</Button>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
          <CoverageAnimation
            ref={mapRef}
            setAddress={setSearchQuery} // 👈 Pass this to child
          />
        </Grid>
      </Grid>
    </Container>
  );
}
