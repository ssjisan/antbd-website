import { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import Area from "./Area";
import RequestStepper from "./RequestStepper";
import AvailablePackages from "./AvailablePackages";
import Details from "./Details";
import Review from "./Review";

const steps = [
  "Check coverage",
  "Choose package",
  "Details",
  "Review & submit",
];

export default function RequestConnectionBody() {
  const [activeStep, setActiveStep] = useState(0);

  // Function to go next step
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  // Function to go back step
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  // Function to render the current step component
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Area />;
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
        <RequestStepper activeStep={activeStep} steps={steps} />
        <Box sx={{ mb: 2 }}>
          Awesome! Antaranga Dot Com Limited is ready to serve you in your area.
          You searched for: <strong>District - Barguna, Area - Amtali</strong>
        </Box>

        {renderStepContent(activeStep)}
      </Container>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          p: "16px",
          bgcolor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          zIndex: 1300,
        }}
      >
        <Container>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}>
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
              {activeStep === steps.length - 1 ? "Place Order" : "Next"}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
