import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { Toaster } from "react-hot-toast";
import Error404 from "../Components/Common/Error404";
import Package from "../Pages/package";
import About from "../Pages/About";

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
        <Route path="*" element={<Error404 />} /> {/* 404 Catch-All Route */}
      </Routes>
    </>
  );
}
