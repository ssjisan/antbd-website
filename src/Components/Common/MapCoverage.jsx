import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

export default function MapCoverage({ setSelectedLatLng, setAddress }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const geocoderRef = useRef(null);

  const placeMarkerAndGeocode = (latLng) => {
    if (!mapRef.current) return;

    if (markerRef.current) markerRef.current.setMap(null);

    markerRef.current = new window.google.maps.Marker({
      position: latLng,
      map: mapRef.current,
    });

    mapRef.current.panTo(latLng);

    geocoderRef.current.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results[0]) {
        const address = results[0].formatted_address;
        setAddress?.(address);
        setSelectedLatLng?.({ lat: latLng.lat(), lng: latLng.lng() });
      } else {
        setAddress?.("Unknown location");
        setSelectedLatLng?.({ lat: latLng.lat(), lng: latLng.lng() });
      }
    });
  };

  useEffect(() => {
    if (!mapRef.current && window.google) {
      mapRef.current = new window.google.maps.Map(
        document.getElementById("map-container"),
        {
          center: { lat: 23.8103, lng: 90.4125 },
          zoom: 15,
          disableDefaultUI: true,
        }
      );

      geocoderRef.current = new window.google.maps.Geocoder();

      mapRef.current.addListener("click", (e) => {
        placeMarkerAndGeocode(e.latLng);
      });
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
      if (mapRef.current) {
        window.google.maps.event.clearInstanceListeners(mapRef.current);
        mapRef.current = null;
      }
    };
  }, [setAddress, setSelectedLatLng]);

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
}

MapCoverage.propTypes = {
  setSelectedLatLng: PropTypes.func,
  setAddress: PropTypes.func,
};
