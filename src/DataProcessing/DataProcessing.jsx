/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import AuthProvider from "./Components/AuthProvider";
export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const { auth, setAuth } = AuthProvider();
  // *************************************************** Axios Configuration *********************************************************** //
  // eslint-disable-next-line
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_API;
  axios.defaults.headers.common["Authorization"] = auth?.token;

  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        // Events
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
