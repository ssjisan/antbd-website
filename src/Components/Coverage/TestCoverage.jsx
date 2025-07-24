import { useEffect, useRef, useState } from "react";

const MapDrawEdit = () => {
  const mapRef = useRef(null);
  const [activeTool, setActiveTool] = useState(""); // "draw" | "edit" | ""
  const [googleMap, setGoogleMap] = useState(null);
  const polygonsRef = useRef([]);
  const drawingManagerRef = useRef(null);
  const [polygonData, setPolygonData] = useState([]);

  // Search state
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const autocompleteServiceRef = useRef(null);
  const placesServiceRef = useRef(null);
  const searchMarkerRef = useRef(null);
  const geocoderRef = useRef(null);
  const mapClickListenerRef = useRef(null);

  // ============================ Initialize Map + Drawing + Load Polygons ============================ //
  useEffect(() => {
    if (window.google && googleMap) {
      const saved = localStorage.getItem("savedPolygons");
      if (saved) {
        const pathsArray = JSON.parse(saved);
        setPolygonData(pathsArray); // Update display list
        pathsArray.forEach((path) => {
          const polygon = new window.google.maps.Polygon({
            paths: path,
            map: googleMap,
            editable: false,
            strokeColor: "#FF0000",
            fillColor: "#FF0000",
            strokeWeight: 2,
            clickable: false, // allow clicks to pass through polygon for marker drop
          });
          polygonsRef.current.push(polygon);
        });
      }
    }
  }, [googleMap]);

  // ============================ Init Google Map and Services ============================
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDo6tI6z6qCTkXDp-pSl8F22SvsvNR1rOA&libraries=drawing,geometry,places";
    script.async = true;
    script.onload = () => {
      const mapOptions = {
        center: { lat: 23.8103, lng: 90.4125 },
        zoom: 13,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        scrollwheel: true,
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

    // Remove previous listener if any
    if (mapClickListenerRef.current) {
      window.google.maps.event.removeListener(mapClickListenerRef.current);
      mapClickListenerRef.current = null;
    }

    // Add listener for map clicks (always active)
    mapClickListenerRef.current = googleMap.addListener("click", (e) => {
      const latLng = e.latLng;
      if (!latLng) return;

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

      // Center and zoom map
      googleMap.panTo(latLng);
      googleMap.setZoom(15);

      // Reverse geocode to get address
      if (geocoderRef.current) {
        geocoderRef.current.geocode({ location: latLng }, (results, status) => {
          if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
            setSearchInput(results[0].formatted_address);
            setSuggestions([]);
          } else {
            setSearchInput("");
          }
        });
      }
    });

    // Cleanup listener on component unmount
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
    setSearchInput(val);

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
    setSearchInput(place.description);
    setSuggestions([]);
    if (!placesServiceRef.current || !googleMap) return;

    // Get place details by place_id
    placesServiceRef.current.getDetails(
      { placeId: place.place_id, fields: ["geometry"] },
      (result, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          if (result.geometry && result.geometry.location) {
            const location = result.geometry.location;

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
      alert("Geolocation is not supported by your browser");
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
            setSearchInput(results[0].formatted_address);
            setSuggestions([]);
          } else {
            setSearchInput("");
          }
        });
      },
      (error) => {
        alert("Unable to retrieve your location: " + error.message);
      }
    );
  };

  // ============================ Start drawing polygon  ============================
  const handleDraw = () => {
    setActiveTool("draw");

    if (!googleMap) return;

    if (drawingManagerRef.current) {
      drawingManagerRef.current.setMap(null);
    }

    const drawingManager = new window.google.maps.drawing.DrawingManager({
      drawingMode: window.google.maps.drawing.OverlayType.POLYGON,
      drawingControl: false,
      polygonOptions: {
        editable: true,
        strokeColor: "#2196f3",
        fillColor: "#2196f3",
        strokeWeight: 2,
        clickable: false, // allow clicks through polygon to map
      },
    });

    drawingManager.setMap(googleMap);
    drawingManagerRef.current = drawingManager;

    window.google.maps.event.addListener(
      drawingManager,
      "polygoncomplete",
      (polygon) => {
        polygonsRef.current.push(polygon);
        savePolygons();
        polygon.setEditable(false);
        drawingManager.setDrawingMode(null);
        setActiveTool(""); // exit draw mode
      }
    );
  };

  // ============================ Enable editing existing polygons ===========================
  const handleEdit = () => {
    setActiveTool("edit");
    polygonsRef.current.forEach((poly) => poly.setEditable(true));
  };

  // Clear all polygons
  const handleClear = () => {
    setActiveTool("clear");
    polygonsRef.current.forEach((poly) => poly.setMap(null));
    polygonsRef.current = [];
    localStorage.removeItem("savedPolygons");
    setPolygonData([]);

    // Remove search marker as well
    if (searchMarkerRef.current) {
      searchMarkerRef.current.setMap(null);
      searchMarkerRef.current = null;
    }
  };

  // =========================== Save polygons to localStorage + update state ===========================
  const savePolygons = () => {
    const data = polygonsRef.current.map((polygon) => {
      const path = polygon.getPath();
      const coordinates = [];
      for (let i = 0; i < path.getLength(); i++) {
        const point = path.getAt(i);
        coordinates.push({ lat: point.lat(), lng: point.lng() });
      }
      return coordinates;
    });
    localStorage.setItem("savedPolygons", JSON.stringify(data));
    setPolygonData(data);
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 16 }}>
      {/* Search Box */}
      <div style={{ position: "relative", marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Search location (min 5 characters)..."
          value={searchInput}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "8px 36px 8px 12px",
            fontSize: 16,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        {/* Circular loading spinner */}
        {loadingSuggestions && (
          <div
            style={{
              position: "absolute",
              right: 8,
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

        {/* Suggestions Dropdown */}
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
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
                onMouseDown={(e) => e.preventDefault()} // Prevent input blur on click
              >
                {place.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Buttons */}
      <div style={{ marginBottom: 10 }}>
        <button
          onClick={handleDraw}
          style={{
            backgroundColor: activeTool === "draw" ? "#4caf50" : "#e0e0e0",
            color: activeTool === "draw" ? "#fff" : "#000",
            marginRight: 8,
            padding: "8px 16px",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Draw
        </button>
        <button
          onClick={handleEdit}
          style={{
            backgroundColor: activeTool === "edit" ? "#2196f3" : "#e0e0e0",
            color: activeTool === "edit" ? "#fff" : "#000",
            marginRight: 8,
            padding: "8px 16px",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Edit
        </button>
        <button
          onClick={handleClear}
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Clear
        </button>
        <button
          onClick={handleUseMyLocation}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            marginLeft: 8,
            marginRight: 8,
          }}
        >
          Use My Location
        </button>
      </div>

      {/* Google Map Container */}
      <div
        ref={mapRef}
        style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
      ></div>

      {/* Polygon List */}
      <div style={{ marginTop: 20, paddingBottom: 20 }}>
        <h3>Saved Polygon Coordinates</h3>
        {polygonData.length === 0 && <p>No polygons drawn yet.</p>}
        {polygonData.map((polygon, index) => (
          <div key={index} style={{ marginBottom: 15 }}>
            <strong>Polygon {index + 1}:</strong>
            <ul style={{ paddingLeft: 20, marginTop: 5 }}>
              {polygon.map((point, idx) => (
                <li key={idx}>
                  Lat: {point.lat.toFixed(5)}, Lng: {point.lng.toFixed(5)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Spinner CSS */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MapDrawEdit;
