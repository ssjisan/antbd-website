import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { Toaster } from "react-hot-toast";
import Error404 from "../Components/Common/Error404";
import Package from "../Pages/Package";
import About from "../Pages/About";
import Coverage from "../Pages/Coverage";
import RequestConnection from "../Pages/RequestConnection";
import TestCoverage from "../Components/Coverage/TestCoverage";
import HelpAndSupportPage from "../Pages/HelpAndSupportPage";

export default function MainRoute() {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#59B259",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#59B259",
            },
          },
          error: {
            style: {
              background: "#EC4034",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#EC4034",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/about" element={<About />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/test" element={<TestCoverage />} />
        <Route path="/request-connection" element={<RequestConnection />} />
        <Route path="/help-support" element={<HelpAndSupportPage />} />
        <Route path="*" element={<Error404 />} /> {/* 404 Catch-All Route */}
      </Routes>
    </>
  );
}
