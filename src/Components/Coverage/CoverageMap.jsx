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

    const coords = selected.polygons[0]?.coordinates;
    if (!coords || !Array.isArray(coords)) return;

    const latLngs = coords.map(([lat, lng]) => [lat, lng]);

    polygonLayer.current = L.polygon(latLngs, {
      color: "#007bff",
      fillOpacity: 0.3,
    }).addTo(mapInstance.current);

    const bounds = polygonLayer.current.getBounds();
    mapInstance.current.flyToBounds(bounds, {
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
