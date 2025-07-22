import {
  Container,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
  Box,
  Button,
  Stack,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { GPS } from "../../assets/Icons/Home/Icons"; // Your GPS icon
import Map from "./Map";
import { DataContext } from "../../DataProcessing/DataProcessing";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";

const Area = forwardRef((props, ref) => {
  const { initialArea } = props;
  const mapRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const { setArea } = useContext(DataContext);
  const [latLng, setLatLng] = useState(initialArea?.latLng || null);
  const [address, setAddress] = useState(initialArea?.address || "");

  useEffect(() => {
    if (initialArea) {
      const lat = parseFloat(initialArea.lat);
      const lng = parseFloat(initialArea.lng);
      setLatLng({ lat, lng });
      setAddress(initialArea.areaName);
      setSearchQuery(initialArea.areaName);

      // Drop pin on the map
      if (mapRef.current?.handleClick) {
        mapRef.current.handleClick(lat, lng);
      } else {
        setSelectedLatLng({ lat, lng });
      }
    }
  }, [initialArea]);

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
      setSuggestions([]);
    }
    setLoading(false);
  };

  const handleSuggestionSelect = (place) => {
    setSearchQuery(place.display_name);
    setSuggestions([]);
    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lon);
    if (mapRef.current?.handleClick) {
      mapRef.current.handleClick(lat, lng);
    } else {
      setSelectedLatLng({ lat, lng });
    }
  };

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

  const checkAvailability = async () => {
    if (!selectedLatLng) {
      toast.error("Please select a location first.");
      return false;
    }

    try {
      const res = await axios.post("/check-availability", {
        lat: selectedLatLng.lat,
        lng: selectedLatLng.lng,
      });

      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        setArea({
          areaName: searchQuery,
          lat: selectedLatLng.lat,
          lng: selectedLatLng.lng,
          zoneName: res.data.combinedAreaZone,
        });
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (err) {
      console.error("Check availability error:", err);
      toast.error(err.response?.data?.message || "Something went wrong.");
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    checkAvailability,
  }));

  return (
    <Container sx={{ pb: "64px" }}>
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
                    idx < suggestions.length - 1 ? "1px solid #eee" : "none",
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

      <Map
        ref={mapRef}
        setSelectedLatLng={setSelectedLatLng}
        setAddress={setSearchQuery}
      />
    </Container>
  );
});

Area.displayName = "Area";

Area.propTypes = {
  initialArea: PropTypes.shape({
    lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    areaName: PropTypes.string,
    latLng: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    address: PropTypes.string,
  }),
};

export default Area;
