import { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function usePackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/all-packages");
        setPackages(response.data?.packages || []);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch packages:", err);
        setPackages([]);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Lowest price package
  const lowestPricePackage = useMemo(() => {
    if (!Array.isArray(packages) || packages.length === 0) return null;
    return [...packages].sort((a, b) => a.price - b.price)[0];
  }, [packages]);

  // Other packages
  const otherPackages = useMemo(() => {
    if (!Array.isArray(packages) || !lowestPricePackage) return [];
    return packages.filter((pkg) => pkg._id !== lowestPricePackage._id);
  }, [packages, lowestPricePackage]);

  return {
    packages,
    lowestPricePackage,
    otherPackages,
    loading,
    error,
  };
}
