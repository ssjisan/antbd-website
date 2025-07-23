import { useEffect, useRef, useState } from "react";

export default function GoogleSearchMap() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const infoWindowRef = useRef(null);
  const autocompleteService = useRef(null);
  const geocoder = useRef(null);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDo6tI6z6qCTkXDp-pSl8F22SvsvNR1rOA&libraries=places";
      script.async = true;
      script.defer = true;
      script.onload = () => setMapLoaded(true);
      document.body.appendChild(script);
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 23.8103, lng: 90.4125 },
      zoom: 13,
    });

    mapRef.current = map;
    geocoder.current = new window.google.maps.Geocoder();

    if (!autocompleteService.current && window.google?.maps?.places) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }

    // Drop pin manually by clicking map
    map.addListener("click", (e) => {
      const location = e.latLng;
      dropMarker(location);
      getPlaceNameFromCoords(location);
    });
  }, [mapLoaded]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.length > 0 && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        { input: value },
        (predictions, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            setSuggestions(predictions.slice(0, 5));
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectPlace = (placeId, name) => {
    const service = new window.google.maps.places.PlacesService(mapRef.current);

    service.getDetails({ placeId }, (place, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place.geometry
      ) {
        const location = place.geometry.location;

        dropMarker(location, name);
        mapRef.current.panTo(location);
        mapRef.current.setZoom(17);

        setSearchInput(name);
        setSuggestions([]);
      }
    });
  };

  const getPlaceNameFromCoords = (latLng) => {
    if (!geocoder.current) return;

    geocoder.current.geocode({ location: latLng }, (results, status) => {
      if (
        status === window.google.maps.GeocoderStatus.OK &&
        results &&
        results[0]
      ) {
        const address = results[0].formatted_address;
        setSearchInput(address);
        showInfoWindow(latLng, address);
      }
    });
  };

  const dropMarker = (location, title = "Selected Location") => {
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }

    markerRef.current = new window.google.maps.Marker({
      map: mapRef.current,
      position: location,
      title,
    });

    showInfoWindow(location, title);
  };

  const showInfoWindow = (location, content) => {
    if (infoWindowRef.current) {
      infoWindowRef.current.close();
    }

    infoWindowRef.current = new window.google.maps.InfoWindow({
      content,
      position: location,
    });

    infoWindowRef.current.open(mapRef.current);
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        dropMarker(location);
        mapRef.current.panTo(location);
        mapRef.current.setZoom(17);
        getPlaceNameFromCoords(location);
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div>
      <h2>Search Location (Map with Pin + My Location)</h2>

      <button
        onClick={handleUseMyLocation}
        style={{
          marginBottom: "8px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        📍 Use My Location
      </button>

      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        placeholder="Search for a place..."
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "5px",
          boxSizing: "border-box",
        }}
      />

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          maxHeight: "150px",
          overflowY: "auto",
          background: "#fff",
          border: suggestions.length ? "1px solid #ccc" : "none",
          borderRadius: "4px",
          marginBottom: "10px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {suggestions.map((s) => (
          <li
            key={s.place_id}
            onClick={() => handleSelectPlace(s.place_id, s.description)}
            style={{
              padding: "8px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
          >
            {s.description}
          </li>
        ))}
      </ul>

      <div
        id="map"
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      ></div>
    </div>
  );
}
