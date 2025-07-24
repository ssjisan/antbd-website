import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const loadGoogleMaps = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
    return;
  }

  const existingScript = document.querySelector("script[src*='maps.googleapis']");
  if (existingScript) {
    existingScript.addEventListener("load", callback);
    return;
  }

  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDo6tI6z6qCTkXDp-pSl8F22SvsvNR1rOA&libraries=drawing,geometry,places";
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
};

export default function CoverageMap({ selected }) {
  // eslint-disable-next-line
  const mapRef = useRef(null);
  const polygonsRef = useRef([]);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    // Whenever 'selected' changes, trigger map re-render by changing mapKey
    setMapKey((k) => k + 1);
  }, [selected]);

  useEffect(() => {
    if (!selected?.polygons?.length) return;

    const init = () => {
      const container = document.getElementById("google-map-container");
      if (!container) return;

      // Clear old polygons
      polygonsRef.current.forEach((polygon) => polygon.setMap(null));
      polygonsRef.current = [];

      // Create new map instance
      const map = new window.google.maps.Map(container, {
        center: { lat: 23.7806, lng: 90.4009 }, // default center
        zoom: 10,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      const bounds = new window.google.maps.LatLngBounds();

      selected.polygons.forEach((poly) => {
        const path = poly.coordinates.map(([lat, lng]) => ({ lat, lng }));

        const polygon = new window.google.maps.Polygon({
          paths: path,
          strokeColor: "#007bff",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#007bff",
          fillOpacity: 0.3,
        });

        polygon.setMap(map);
        polygonsRef.current.push(polygon);

        path.forEach((point) => bounds.extend(point));
      });

      map.fitBounds(bounds);
    };

    if (
      typeof window.google === "object" &&
      typeof window.google.maps === "object"
    ) {
      init();
    } else {
      loadGoogleMaps(init);
    }

    // Cleanup polygons on unmount or before next run
    return () => {
      polygonsRef.current.forEach((polygon) => polygon.setMap(null));
      polygonsRef.current = [];
    };
  }, [mapKey, selected]);

  return (
    <div
      id="google-map-container"
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
};
