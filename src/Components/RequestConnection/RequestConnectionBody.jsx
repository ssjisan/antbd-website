import { useContext, useEffect, useRef, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Area from "./Area";
import RequestStepper from "./RequestStepper";
import AvailablePackages from "./AvailablePackages";
import Details from "./Details";
import Review from "./Review";
import { DataContext } from "../../DataProcessing/DataContext";
import toast from "react-hot-toast";

const steps = [
  "Check coverage",
  "Choose package",
  "Details",
  "Review & submit",
];

export default function RequestConnectionBody() {
  const [activeStep, setActiveStep] = useState(0);
  const areaRef = useRef();
  const [success, setSuccess] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(10);

  const { area, packageId, formData, setArea, setPackageId, setFormData } =
    useContext(DataContext);
  const navigate = useNavigate();

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const clearAllData = () => {
    setArea({
      areaName: "",
      lat: null,
      lng: null,
      zoneName: "",
    });
    setPackageId(null);
    setFormData({
      name: "",
      mobile: "",
      email: "",
      zone: "",
      area: "",
      fullAddress: "",
    });
    localStorage.removeItem("areaInfo");
    localStorage.removeItem("selectedPackageId");
    localStorage.removeItem("formData");
  };

  const handlePlaceOrder = async () => {
    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      zone: formData.zone,
      area: formData.area,
      fullAddress: formData.fullAddress,
      areaInfo: area,
      packageId: packageId,
    };

    try {
      await axios.post("/connection-request", payload);
      toast.success("Order placed successfully!");
      clearAllData();
      setSuccess(true);
    } catch (error) {
      console.error("Failed to place order:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      const success = await areaRef.current?.checkAvailability();
      if (!success) return;
    }

    if (activeStep === steps.length - 1) {
      await handlePlaceOrder();
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  useEffect(() => {
    const storedArea = JSON.parse(localStorage.getItem("areaInfo"));
    const hasValidArea =
      (area?.lat && area?.lng && area?.areaName) ||
      (storedArea?.lat && storedArea?.lng && storedArea?.areaName);

    if (hasValidArea) {
      setActiveStep(1);
    }
  }, []);

  // Countdown redirect effect
  useEffect(() => {
    if (!success) return;

    const interval = setInterval(() => {
      setRedirectCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [success, navigate]);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Area ref={areaRef} initialArea={area} />;
      case 1:
        return <AvailablePackages />;
      case 2:
        return <Details />;
      case 3:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container sx={{ pt: "64px", pb: "96px" }}>
        <RequestStepper
          activeStep={activeStep}
          steps={steps}
          completedSteps={success ? [0, 1, 2, 3] : undefined}
        />

        {success ? (
          <Box textAlign="center" mt={8}>
            <img
              src="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753901430/website/section-images/done_slrps4.png"
              alt="success"
              width={280}
            />
            <Box mt={2} fontSize={24} fontWeight={700}>
              Your connection request has been submitted!
            </Box>
            <Box mt={1} color="text.secondary" fontSize={16}>
              We will contact you shortly with confirmation.
            </Box>
            <Box mt={3} fontSize={16} color="text.primary">
              You will be redirected to the homepage in{" "}
              <Box component="span" fontWeight={600} display="inline">
                {redirectCountdown}
              </Box>{" "}
              seconds.
            </Box>
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => navigate("/")}
            >
              Go to Homepage Now
            </Button>
          </Box>
        ) : (
          renderStepContent(activeStep)
        )}
      </Container>

      {/* Button Container (slides out when success) */}
      <Box
        sx={{
          position: "fixed",
          bottom: success ? "-100px" : 0,
          left: 0,
          width: "100%",
          p: "16px",
          bgcolor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          zIndex: 1300,
          transition: "bottom 0.3s ease-in-out",
        }}
      >
        {!success && (
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "16px",
              }}
            >
              <Button
                color="inherit"
                variant="soft"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="contained"
                sx={{ width: "240px" }}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1
                  ? "Place Order"
                  : activeStep === 0
                  ? "Check & Next"
                  : "Next"}
              </Button>
            </Box>
          </Container>
        )}
      </Box>
    </>
  );
}
