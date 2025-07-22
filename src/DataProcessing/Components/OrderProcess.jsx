import { useState, useEffect } from "react";

const STORAGE_KEYS = {
  area: "areaInfo",
  packageId: "selectedPackageId",
  formData: "formData",
  timestamp: "orderProcessTimestamp",
};

const EXPIRATION_MS = 24 * 60 * 60 * 1000; // 24 hours in ms

function getStoredData(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function isExpired(timestamp) {
  if (!timestamp) return true;
  return Date.now() - timestamp > EXPIRATION_MS;
}

export default function OrderProcess() {
  // Check if saved data is expired; if so, clear it
  const savedTimestamp = localStorage.getItem(STORAGE_KEYS.timestamp);
  const expired = isExpired(Number(savedTimestamp));

  if (expired) {
    localStorage.removeItem(STORAGE_KEYS.area);
    localStorage.removeItem(STORAGE_KEYS.packageId);
    localStorage.removeItem(STORAGE_KEYS.formData);
    localStorage.removeItem(STORAGE_KEYS.timestamp);
  }

  const savedArea = getStoredData(STORAGE_KEYS.area);
  const savedPackageId = localStorage.getItem(STORAGE_KEYS.packageId); // string or null
  const savedFormData = getStoredData(STORAGE_KEYS.formData);

  const [area, setAreaState] = useState(
    savedArea ?? {
      areaName: "",
      lat: null,
      lng: null,
      zoneName: "",
    }
  );

  const [packageId, setPackageIdState] = useState(savedPackageId || null);

  const [formData, setFormDataState] = useState(
    savedFormData ?? {
      name: "",
      mobile: "",
      email: "",
      zone: "",
      area: "",
      fullAddress: "",
    }
  );

  // Helper to update timestamp on any data change
  const updateTimestamp = () => {
    localStorage.setItem(STORAGE_KEYS.timestamp, Date.now().toString());
  };

  // Save area
  const setArea = (newArea) => {
    setAreaState(newArea);
    localStorage.setItem(STORAGE_KEYS.area, JSON.stringify(newArea));
    updateTimestamp();
  };

  // Save package ID
  const setPackageId = (newPackageId) => {
    setPackageIdState(newPackageId);
    localStorage.setItem(STORAGE_KEYS.packageId, newPackageId);
    updateTimestamp();
  };

  // Save form data
  const setFormData = (newFormData) => {
    setFormDataState(newFormData);
    localStorage.setItem(STORAGE_KEYS.formData, JSON.stringify(newFormData));
    updateTimestamp();
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.area, JSON.stringify(area));
    updateTimestamp();
  }, [area]);

  useEffect(() => {
    if (packageId !== null) {
      localStorage.setItem(STORAGE_KEYS.packageId, packageId);
      updateTimestamp();
    }
  }, [packageId]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.formData, JSON.stringify(formData));
    updateTimestamp();
  }, [formData]);

  return {
    area,
    setArea,
    packageId,
    setPackageId,
    formData,
    setFormData,
  };
}
