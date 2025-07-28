import { useContext, useRef, useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import { GPS } from "../../assets/Icons/Home/Icons";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useNavigate } from "react-router-dom";
import { Search } from "../../assets/Icons/Common/Icons";

export default function CheckCoverage() {
  const { setArea } = useContext(DataContext);
  const mapRef = useRef(null);
  const [googleMap, setGoogleMap] = useState(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const autocompleteServiceRef = useRef(null);
  const placesServiceRef = useRef(null);
  const searchMarkerRef = useRef(null);
  const geocoderRef = useRef(null);
  const mapClickListenerRef = useRef(null);
  const [selectedLatLng, setSelectedLatLng] = useState(null);

  // ============================ Init Google Map and Services ============================
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDo6tI6z6qCTkXDp-pSl8F22SvsvNR1rOA&libraries=drawing,geometry,places`;
    script.async = true;
    script.onload = () => {
      const mapOptions = {
        center: { lat: 23.8103, lng: 90.4125 },
        zoom: 15,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);
      setGoogleMap(map);

      autocompleteServiceRef.current =
        new window.google.maps.places.AutocompleteService();
      placesServiceRef.current = new window.google.maps.places.PlacesService(
        map
      );
      geocoderRef.current = new window.google.maps.Geocoder();
    };
    document.head.appendChild(script);
  }, []);

  // ============================ Always listen for map clicks to drop pin ============================

  useEffect(() => {
    if (!googleMap) return;

    const handleMapClick = (e) => {
      const latLng = e.latLng;
      if (!latLng) return;

      const position = {
        lat: latLng.lat(),
        lng: latLng.lng(),
      };

      setSelectedLatLng(position);

      if (searchMarkerRef.current) {
        searchMarkerRef.current.setPosition(latLng);
      } else {
        searchMarkerRef.current = new window.google.maps.Marker({
          position: latLng,
          map: googleMap,
          animation: window.google.maps.Animation.DROP,
        });
      }

      googleMap.panTo(latLng);
      googleMap.setZoom(15);

      if (geocoderRef.current) {
        geocoderRef.current.geocode({ location: latLng }, (results, status) => {
          if (
            status === window.google.maps.GeocoderStatus.OK &&
            results?.[0]?.formatted_address
          ) {
            setSearchQuery(results[0].formatted_address);
            setSuggestions([]);
          } else {
            setSearchQuery("");
          }
        });
      }
    };

    // Remove previous listener if exists
    if (mapClickListenerRef.current) {
      window.google.maps.event.removeListener(mapClickListenerRef.current);
    }

    // Attach new listener
    mapClickListenerRef.current = googleMap.addListener(
      "click",
      handleMapClick
    );

    // Cleanup on unmount
    return () => {
      if (mapClickListenerRef.current) {
        window.google.maps.event.removeListener(mapClickListenerRef.current);
        mapClickListenerRef.current = null;
      }
    };
  }, [googleMap]);

  // ============================ Search input change ============================
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);

    if (!autocompleteServiceRef.current) return;

    if (val.length >= 5) {
      setLoadingSuggestions(true);
      autocompleteServiceRef.current.getPlacePredictions(
        { input: val },
        (predictions, status) => {
          setLoadingSuggestions(false);
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  // ============================ When user clicks a suggestion ============================
  const handleSuggestionClick = (place) => {
    setSearchQuery(place.description);
    setSuggestions([]);
    if (!placesServiceRef.current || !googleMap) return;

    // Get place details by place_id
    placesServiceRef.current.getDetails(
      { placeId: place.place_id, fields: ["geometry"] },
      (result, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          if (result.geometry && result.geometry.location) {
            const location = result.geometry.location;
            setSelectedLatLng({
              lat: location.lat(),
              lng: location.lng(),
            });
            // Center and zoom map
            googleMap.panTo(location);
            googleMap.setZoom(15);

            // Place or move the marker
            if (searchMarkerRef.current) {
              searchMarkerRef.current.setPosition(location);
            } else {
              searchMarkerRef.current = new window.google.maps.Marker({
                position: location,
                map: googleMap,
                animation: window.google.maps.Animation.DROP,
              });
            }
          }
        }
      }
    );
  };

  // ============================ Use My Location button click handler ============================
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }
    if (!googleMap || !geocoderRef.current) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latLng = new window.google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        // Center map & zoom
        googleMap.panTo(latLng);
        googleMap.setZoom(15);
        setSelectedLatLng({
          lat: latLng.lat(),
          lng: latLng.lng(),
        });
        // Place or move marker
        if (searchMarkerRef.current) {
          searchMarkerRef.current.setPosition(latLng);
        } else {
          searchMarkerRef.current = new window.google.maps.Marker({
            position: latLng,
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
          });
        }

        // Reverse geocode to get address
        geocoderRef.current.geocode({ location: latLng }, (results, status) => {
          if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
            setSearchQuery(results[0].formatted_address);
            setSuggestions([]);
          } else {
            setSearchQuery("");
          }
        });
      },
      (error) => {
        toast.error("Unable to retrieve your location: " + error.message);
      }
    );
  };

  const handleCheckAvailability = async () => {
    if (!selectedLatLng) {
      toast.error("Please select a location first.");
      return;
    }
    const checking = toast.loading("Checking...");
    try {
      const res = await axios.post("/check-availability", {
        lat: selectedLatLng.lat,
        lng: selectedLatLng.lng,
      });

      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        navigate("/request-connection");
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
    } finally {
      toast.dismiss(checking);
    }
  };

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Stack alignItems="center" gap="24px">
        <Stack gap={1} sx={{ my: 3, width: "100%" }} alignItems="center">
          <Typography variant="h3">Check Coverage</Typography>
          <Typography variant="h6" color="text.secondary">
            Enter your address, or use the map&lsquo;s location icon to explore
            coverage in your service area.
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="stretch"
          sx={{ width: {xs:"100%",sm:"100%",md:"100%",lg:"70%"} }}
        >
          {/* GPS + Search Field - always in a row */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ flex: 1 }}
          >
            {/* GPS Icon */}
            <IconButton
              onClick={handleUseMyLocation}
              size="large"
            >
              <GPS size="24px" color="#ED1B24" />
            </IconButton>

            {/* Search Field */}
            <Box sx={{ flexGrow: 1, position: "relative" }}>
              <TextField
                type="text"
                placeholder="Search location (min 5 characters)..."
                value={searchQuery}
                fullWidth
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      edge="end"
                      onClick={() => {
                        if (suggestions.length > 0) {
                          handleSuggestionClick(suggestions[0]);
                        }
                      }}
                      size="small"
                    >
                      <Search size="20px" color="#000" />
                    </IconButton>
                  ),
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (suggestions.length > 0) {
                      handleSuggestionClick(suggestions[0]);
                    }
                  }
                }}
              />

              {/* Spinner */}
              {loadingSuggestions && (
                <Box
                  sx={{
                    position: "absolute",
                    right: 40,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 20,
                    height: 20,
                    border: "3px solid #ccc",
                    borderTop: "3px solid #2196f3",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <ul
                  style={{
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    left: 0,
                    right: 0,
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    maxHeight: 180,
                    overflowY: "auto",
                    zIndex: 1000,
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                  }}
                >
                  {suggestions.map((place) => (
                    <li
                      key={place.place_id}
                      onClick={() => handleSuggestionClick(place)}
                      onMouseDown={(e) => e.preventDefault()}
                      style={{
                        padding: "8px 12px",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {place.description}
                    </li>
                  ))}
                </ul>
              )}
            </Box>
          </Stack>

          {/* Check Availability Button */}
          <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Button
              variant="contained"
              onClick={handleCheckAvailability}
              sx={{
                height: "54px",
                width: "100%",
                whiteSpace: "nowrap",
              }}
            >
              Check Availability
            </Button>
          </Box>
        </Stack>
      </Stack>
      <Box
        ref={mapRef}
        sx={{
          mt: "48px",
          width: "100%",
          height: "480px",
          border: "1px solid #ccc",
          borderRadius: "20px",
        }}
      ></Box>
    </Container>
  );
}
