import { useContext, useRef, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { GPS } from "../../assets/Icons/Home/Icons"; // Your GPS icon
import CoverageAnimation from "../Common/CoverageAnimation";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useNavigate } from "react-router-dom";

export default function CheckCoverage() {
  const mapRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const { setArea } = useContext(DataContext);
  const navigate = useNavigate()

  // Search input handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length >= 5) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  // Fetch suggestions from Nominatim API
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
      setSuggestions([]);
    }
    setLoading(false);
  };

  // When user selects a suggestion
  const handleSuggestionSelect = (place) => {
    setSearchQuery(place.display_name);
    setSuggestions([]);
    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lon);

    if (mapRef.current?.handleClick) {
      mapRef.current.handleClick(lat, lng); // This updates marker and selectedLatLng
    } else {
      setSelectedLatLng({ lat, lng });
    }
  };

  // Use Geolocation API to get user position
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (mapRef.current?.handleClick) {
          mapRef.current.handleClick(latitude, longitude);
        } else {
          setSelectedLatLng({ lat: latitude, lng: longitude });
        }
        setSearchQuery(
          `Current location: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
        );
      },
      () => {
        toast.error("Permission denied or failed to get location.");
      }
    );
  };

  // On Check Availability button
  const handleCheckAvailability = async () => {
    if (!selectedLatLng) {
      toast.error("Please select a location first.");
      return;
    }

    try {
      const res = await axios.post("/check-availability", {
        lat: selectedLatLng.lat,
        lng: selectedLatLng.lng,
      });

      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        navigate("/request-connection")
        setArea({
          areaName: searchQuery,
          lat: selectedLatLng.lat,
          lng: selectedLatLng.lng,
          zoneName: res.data.combinedAreaZone,
        });
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Check availability error:", err);
      const msg = err.response?.data?.message || "Something went wrong.";
      toast.error(msg);
    }
  };

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack gap={1} sx={{ mt: 6 }}>
            <Typography variant="h3">Check Coverage</Typography>
            <Typography variant="h6" color="text.secondary">
              Find out if we’re available in your area today.
            </Typography>
          </Stack>

          <Stack sx={{ my: 4 }} gap={3} position="relative">
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
                  borderRadius: 1,
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
                      "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                  >
                    {s.display_name}
                  </Box>
                ))}
              </Box>
            )}

            <Typography variant="h6" mb={2}>
              Click anywhere on the map to drop a pin, or use{" "}
              <Button
                onClick={handleUseMyLocation}
                variant="contained"
                color="secondary"
                sx={{ mx: 1, minWidth: "auto", padding: "6px 12px" }}
              >
                <GPS color="#fff" size="20px" />
              </Button>
              to use your current location.
            </Typography>
          </Stack>

          <Button variant="contained" onClick={handleCheckAvailability}>
            Check Availability
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8}>
          <CoverageAnimation
            ref={mapRef}
            setSelectedLatLng={setSelectedLatLng}
            setAddress={setSearchQuery}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
