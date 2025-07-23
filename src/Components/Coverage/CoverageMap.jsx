import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import PropTypes from "prop-types";

export default function CoverageMap({ selected }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const polygonLayer = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    mapInstance.current = L.map(mapRef.current, {
      center: [23.7806, 90.4009],
      zoom: 10,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapInstance.current);
  }, []);

  useEffect(() => {
    if (!mapInstance.current) return;

    // Remove existing polygon if any
    if (polygonLayer.current) {
      mapInstance.current.removeLayer(polygonLayer.current);
      polygonLayer.current = null;
    }

    if (!selected?.polygons?.length) return;

    // Create a feature group to manage all polygons and fit bounds
    const featureGroup = L.featureGroup();

    selected.polygons.forEach((polygon) => {
      const coords = polygon.coordinates;
      if (!coords || !Array.isArray(coords)) return;

      const latLngs = coords.map(([lat, lng]) => [lat, lng]);

      const layer = L.polygon(latLngs, {
        color: "#007bff",
        fillOpacity: 0.3,
      }).addTo(mapInstance.current);

      featureGroup.addLayer(layer);
    });

    polygonLayer.current = featureGroup;

    // Fit map bounds to all polygons
    mapInstance.current.fitBounds(featureGroup.getBounds(), {
      animate: true,
      duration: 3,
    });
  }, [selected]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
      }}
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
