import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

export default function CoverageMap({ coverageAreas, selected }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const polygonLayer = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: [23.7806, 90.4009], // fallback center
        zoom: 10,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapInstance.current);

      // ✅ Zoom to the initially selected polygon on first load
      const initialArea = coverageAreas.find((a) => a.id === selected);
      if (initialArea && initialArea.polygon) {
        const initialPolygon = L.polygon(initialArea.polygon);
        const bounds = initialPolygon.getBounds();
        mapInstance.current.fitBounds(bounds, { animate: true, duration: 1 });
      }
    }
  }, [coverageAreas, selected]);

  useEffect(() => {
    if (!mapInstance.current) return;

    const area = coverageAreas.find((a) => a.id === selected);
    if (!area || !area.polygon) return;

    if (polygonLayer.current) {
      polygonLayer.current.setLatLngs(area.polygon);
      polygonLayer.current.redraw();
    } else {
      polygonLayer.current = L.polygon(area.polygon, {
        color: "#007bff",
        fillOpacity: 0.3,
      }).addTo(mapInstance.current);
    }

    const bounds = polygonLayer.current.getBounds();
    const center = bounds.getCenter();

    mapInstance.current.panTo(center, {
      animate: true,
      duration: 1,
    });

    // Or to zoom fully on each change, you can use:
    // mapInstance.current.fitBounds(bounds, { animate: true, duration: 1 });
  }, [coverageAreas, selected]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%", // instead of fixed 680px
        borderRadius: "20px",
      }}
    />
  );
}
