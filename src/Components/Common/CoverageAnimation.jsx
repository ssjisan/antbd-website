import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const CoverageAnimation = forwardRef(({ setAddress, setSelectedLatLng }, ref) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Function to handle click and reverse geocode
  const handleClick = async (lat, lng) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await res.json();
    const address = data.display_name || "Unknown location";

    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    markerRef.current = L.marker([lat, lng])
      .addTo(mapRef.current)
      .bindPopup(address)
      .openPopup();

    mapRef.current.setView([lat, lng], 20);

    // Notify parent with the address
    if (setAddress) setAddress(address);

    // NEW: Notify parent with the lat/lng as well
    if (setSelectedLatLng) setSelectedLatLng({ lat, lng });
  };

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map-container", {
        center: [23.8103, 90.4125],
        zoom: 15,
        zoomControl: false,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );
      mapRef.current = map;

      map.on("click", (e) => {
        const { lat, lng } = e.latlng;
        handleClick(lat, lng);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Expose handleClick to parent (for GPS access or programmatic click)
  useImperativeHandle(ref, () => ({
    handleClick,
  }));

  return (
    <Box
      sx={{
        position: "relative",
        height: "480px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Box
        id="map-container"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: 2,
          zIndex: 0,
        }}
      />
    </Box>
  );
});

CoverageAnimation.displayName = "CoverageAnimation";

CoverageAnimation.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setSelectedLatLng: PropTypes.func, // new prop to receive selected lat/lng
};

export default CoverageAnimation;