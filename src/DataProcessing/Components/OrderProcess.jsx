import { useState, useEffect } from "react";

export default function OrderProcess() {
  const saved = localStorage.getItem("areaInfo");

  const [area, setAreaState] = useState(
    saved
      ? JSON.parse(saved)
      : {
          areaName: "",
          lat: null,
          lng: null,
        }
  );

  const setArea = (newArea) => {
    setAreaState(newArea);
    localStorage.setItem("areaInfo", JSON.stringify(newArea));
  };

  useEffect(() => {
    localStorage.setItem("areaInfo", JSON.stringify(area));
  }, [area]);

  return {
    area,
    setArea,
  };
}
