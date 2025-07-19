import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

// Point-in-Polygon check (Ray Casting)
function isPointInPolygon(point, vs) {
  const x = point[0],
    y = point[1];
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][0],
      yi = vs[i][1];
    const xj = vs[j][0],
      yj = vs[j][1];

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export default function TestCoverage() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const drawnItemsRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const map = L.map("map").setView([22.353, 91.8325], 15);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const drawnItems = new L.FeatureGroup();
    drawnItemsRef.current = drawnItems;
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        marker: false,
        circle: false,
        rectangle: false,
        polyline: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: drawnItems,
        remove: true,
      },
    });

    map.addControl(drawControl);

    // Load saved polygons
    const savedPolygons = localStorage.getItem("coveragePolygons");
    if (savedPolygons) {
      const polygons = JSON.parse(savedPolygons);
      polygons.forEach((coords) => {
        const polygon = L.polygon(
          coords.map(([lat, lng]) => [lat, lng]),
          {
            color: "blue",
            fillOpacity: 0.2,
          }
        );
        polygon.addTo(drawnItems);
      });
    }

    const savePolygonsToStorage = () => {
      const allPolygons = [];
      drawnItems.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
          const coords = layer
            .getLatLngs()[0]
            .map((latlng) => [latlng.lat, latlng.lng]);
          allPolygons.push(coords);
        }
      });
      localStorage.setItem("coveragePolygons", JSON.stringify(allPolygons));
    };

    map.on("draw:created", function (e) {
      const layer = e.layer;
      drawnItems.addLayer(layer);
      savePolygonsToStorage();
    });

    map.on("draw:deleted", savePolygonsToStorage);
    map.on("draw:edited", savePolygonsToStorage);

    return () => map.remove();
  }, []);

  const checkInsideAnyPolygon = ([lng, lat]) => {
    let inside = false;
    drawnItemsRef.current.eachLayer((layer) => {
      if (layer instanceof L.Polygon) {
        const latLngs = layer.getLatLngs()[0];
        const polygonCoords = latLngs.map((latlng) => [latlng.lng, latlng.lat]);
        if (isPointInPolygon([lng, lat], polygonCoords)) {
          inside = true;
        }
      }
    });
    return inside;
  };

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
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setSuggestions(data.slice(0, 5));
    } catch (err) {
      console.error("Suggestion error:", err);
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (place) => {
    setSearchQuery(place.display_name);
    setSuggestions([]);

    const lat = parseFloat(place.lat);
    const lng = parseFloat(place.lon);
    const latLng = L.latLng(lat, lng);

    updateMapWithLocation(latLng, "Searched location");
  };

  const updateMapWithLocation = (latLng, label) => {
    const lat = latLng.lat;
    const lng = latLng.lng;

    if (markerRef.current) {
      mapRef.current.removeLayer(markerRef.current);
    }

    markerRef.current = L.marker(latLng)
      .addTo(mapRef.current)
      .bindPopup(label)
      .openPopup();

    mapRef.current.setView(latLng, 16);

    const isInside = checkInsideAnyPolygon([lng, lat]);

    L.popup()
      .setLatLng(latLng)
      .setContent(
        isInside
          ? "✅ This location is inside the coverage area."
          : "❌ This location is outside the coverage area."
      )
      .openOn(mapRef.current);
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const latLng = L.latLng(lat, lng);

        // Reverse geocode to get address
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          );
          const data = await res.json();
          if (data && data.display_name) {
            setSearchQuery(data.display_name);
          } else {
            setSearchQuery(`${lat}, ${lng}`);
          }
        } catch (err) {
          console.error("Reverse geocoding error:", err);
          setSearchQuery(`${lat}, ${lng}`);
        }

        updateMapWithLocation(latLng, "Your current location");
      },
      () => {
        alert("Location access denied or failed.");
      }
    );
  };

  return (
    <div>
      <h2>Coverage Check (Multiple Areas + GPS + Search)</h2>

      <div style={{ position: "relative", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search location..."
          value={searchQuery}
          onChange={handleInputChange}
          style={{ padding: "6px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={handleUseMyLocation} style={{ padding: "6px 10px" }}>
          Use My Location
        </button>

        {suggestions.length > 0 && (
          <ul
            style={{
              position: "absolute",
              top: "35px",
              left: 0,
              background: "#fff",
              border: "1px solid #ccc",
              width: "300px",
              zIndex: 1000,
              listStyle: "none",
              padding: 0,
              margin: 0,
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {suggestions.map((s, i) => (
              <li
                key={i}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
                onClick={() => handleSelectSuggestion(s)}
              >
                {s.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        id="map"
        style={{
          height: "500px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      ></div>
    </div>
  );
}
