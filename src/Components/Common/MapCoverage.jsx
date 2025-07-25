// MapCoverage.js
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function MapCoverage({
  setGoogleMap,
  setSelectedLatLng,
  setSearchQuery,
  setSuggestions,
}) {
  const mapRef = useRef(null);
  const searchMarkerRef = useRef(null);
  const geocoderRef = useRef(null);
  const mapClickListenerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDo6tI6z6qCTkXDp-pSl8F22SvsvNR1rOA&libraries=drawing,geometry,places";
    script.async = true;
    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 23.8103, lng: 90.4125 },
        zoom: 15,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        scrollwheel: true,
      });
      setGoogleMap(map);
      geocoderRef.current = new window.google.maps.Geocoder();

      const handleMapClick = (e) => {
        const latLng = e.latLng;
        if (!latLng) return;

        const position = {
          lat: latLng.lat(),
          lng: latLng.lng(),
        };
        setSelectedLatLng(position);

        if (searchMarkerRef.current) {
          searchMarkerRef.current.setPosition(latLng);
        } else {
          searchMarkerRef.current = new window.google.maps.Marker({
            position: latLng,
            map,
            animation: window.google.maps.Animation.DROP,
          });
        }

        map.panTo(latLng);
        map.setZoom(15);

        if (geocoderRef.current) {
          geocoderRef.current.geocode({ location: latLng }, (results, status) => {
            if (
              status === window.google.maps.GeocoderStatus.OK &&
              results?.[0]?.formatted_address
            ) {
              setSearchQuery(results[0].formatted_address);
              setSuggestions([]);
            } else {
              setSearchQuery("");
            }
          });
        }
      };

      mapClickListenerRef.current = map.addListener("click", handleMapClick);
    };

    return () => {
      if (mapClickListenerRef.current) {
        window.google.maps.event.removeListener(mapClickListenerRef.current);
        mapClickListenerRef.current = null;
      }
    };
  }, [setGoogleMap, setSelectedLatLng, setSearchQuery, setSuggestions]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "480px",
        border: "1px solid #ccc",
        borderRadius: "20px",
      }}
    ></div>
  );
}

MapCoverage.propTypes = {
  setGoogleMap: PropTypes.func.isRequired,
  setSelectedLatLng: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  setSuggestions: PropTypes.func.isRequired,
};