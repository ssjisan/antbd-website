import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";

const loadGoogleMaps = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
    return;
  }

  const existingScript = document.querySelector(
    "script[src*='maps.googleapis']"
  );
  if (existingScript) {
    existingScript.addEventListener("load", callback);
    return;
  }
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=drawing,geometry,places`;

  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.head.appendChild(script);
};

export default function CoverageMap({ selected, loadingMap }) {
  const mapRef = useRef(null);
  const polygonsRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [scriptLoading, setScriptLoading] = useState(false);
  const containerRef = useRef(null);

  // Initialize map only once
  useEffect(() => {
    if (mapRef.current || scriptLoading) return;

    const initMap = () => {
      // Ensure container exists in DOM
      if (!containerRef.current) {
        // Wait a bit for container to be available
        setTimeout(initMap, 100);
        return;
      }

      // Check if container already has a map instance
      if (containerRef.current.querySelector(".gm-style")) {
        // Map already initialized on this container
        if (window.google && window.google.maps && window.google.maps.Map) {
          // Try to get existing map instance
          const mapDiv = containerRef.current;
          if (mapDiv.__googlemap) {
            mapRef.current = mapDiv.__googlemap;
          } else {
            // Create new map
            mapRef.current = new window.google.maps.Map(containerRef.current, {
              center: { lat: 23.7806, lng: 90.4009 },
              zoom: 10,
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
            });
            // Store reference
            mapDiv.__googlemap = mapRef.current;
          }
        }
        setMapLoaded(true);
        return;
      }

      // Create new map
      mapRef.current = new window.google.maps.Map(containerRef.current, {
        center: { lat: 23.7806, lng: 90.4009 },
        zoom: 10,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      // Store reference on the DOM element
      containerRef.current.__googlemap = mapRef.current;
      setMapLoaded(true);
    };

    if (
      typeof window.google === "object" &&
      typeof window.google.maps === "object"
    ) {
      initMap();
    } else {
      setScriptLoading(true);
      loadGoogleMaps(() => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          initMap();
          setScriptLoading(false);
        }, 100);
      });
    }

    // Cleanup on unmount
    return () => {
      polygonsRef.current.forEach((polygon) => polygon.setMap(null));
      polygonsRef.current = [];
      // Don't destroy the map instance, just remove polygons
      // This allows map to persist between renders
    };
  }, [scriptLoading]);

  // Update polygons when selected changes (but map instance persists)
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    // Clear existing polygons
    polygonsRef.current.forEach((polygon) => polygon.setMap(null));
    polygonsRef.current = [];

    if (!selected?.polygons?.length) {
      // Reset to default view if no area selected
      mapRef.current.setCenter({ lat: 23.7806, lng: 90.4009 });
      mapRef.current.setZoom(10);
      return;
    }

    const bounds = new window.google.maps.LatLngBounds();

    // Draw new polygons
    selected.polygons.forEach((poly) => {
      const path = poly.coordinates.map(([lat, lng]) => ({ lat, lng }));

      const polygon = new window.google.maps.Polygon({
        paths: path,
        strokeColor: "#007bff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#007bff",
        fillOpacity: 0.3,
        map: mapRef.current,
      });

      polygonsRef.current.push(polygon);

      // Extend bounds for each point
      path.forEach((point) => bounds.extend(point));
    });

    // Fit map to the polygons
    if (polygonsRef.current.length > 0) {
      mapRef.current.fitBounds(bounds);
    }
  }, [selected, mapLoaded]);

  // Trigger map resize when container becomes visible (for modal)
  useEffect(() => {
    if (mapRef.current && mapLoaded) {
      // Small timeout to ensure container is fully rendered
      setTimeout(() => {
        if (window.google && window.google.maps && window.google.maps.event) {
          window.google.maps.event.trigger(mapRef.current, "resize");
        }
      }, 100);
    }
  }, [mapLoaded]);

  if (loadingMap || scriptLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{ borderRadius: "20px" }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", borderRadius: "20px" }}
    />
  );
}

CoverageMap.propTypes = {
  selected: PropTypes.shape({
    polygons: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.arrayOf(
          PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
        ).isRequired,
      })
    ),
  }),
  loadingMap: PropTypes.bool.isRequired,
};
