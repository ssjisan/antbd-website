import { useEffect, useState } from "react";

let googleMapsPromise = null;

export default function useGoogleMaps() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    if (!googleMapsPromise) {
      googleMapsPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=drawing,geometry,places`;

        script.async = true;

        script.onload = () => {
          resolve();
        };

        document.head.appendChild(script);
      });
    }

    googleMapsPromise.then(() => setLoaded(true));
  }, [loaded]);

  return loaded;
}
