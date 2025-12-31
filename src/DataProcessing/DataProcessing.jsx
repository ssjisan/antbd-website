import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import OrderProcess from "./Components/OrderProcess";
import Package from "./Components/Package";
import { DataContext } from "./DataContext";

export default function DataProcessing({ children }) {
  // *************************************************** Axios Configuration *********************************************************** //
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;

  const { area, setArea, packageId, setPackageId, formData, setFormData } =
    OrderProcess();
  const { packages, loading, error, lowestPricePackage, specialPackages } =
    Package();

  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLang(savedLang);
  }, []);

  // Toggle language and store in localStorage
  const toggleLang = () => {
    setLang((prev) => {
      const newLang = prev === "en" ? "bn" : "en";
      localStorage.setItem("lang", newLang);
      return newLang;
    });
  };
  return (
    <DataContext.Provider
      value={{
        lang,
        toggleLang,
        area,
        setArea,
        packageId,
        setPackageId,
        formData,
        setFormData,
        packages,
        loading,
        error,
        lowestPricePackage,
        specialPackages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
// Prop types validation
DataProcessing.propTypes = {
  children: PropTypes.node.isRequired,
};
