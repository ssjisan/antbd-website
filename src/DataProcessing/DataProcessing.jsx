/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import AuthProvider from "./Components/AuthProvider";
import OrderProcess from "./Components/OrderProcess";
export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const { auth, setAuth } = AuthProvider();
  // *************************************************** Axios Configuration *********************************************************** //
  // eslint-disable-next-line
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_API;
  axios.defaults.headers.common["Authorization"] = auth?.token;

  const { area, setArea, packageId, setPackageId, formData, setFormData } =
    OrderProcess();

  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        // Request
        area,
        setArea,
        packageId,
        setPackageId,
        formData,
        setFormData,
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
