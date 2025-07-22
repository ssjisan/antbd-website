import { useContext, useRef, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import toast from "react-hot-toast";

import Area from "./Area";
import RequestStepper from "./RequestStepper";
import AvailablePackages from "./AvailablePackages";
import Details from "./Details";
import Review from "./Review";
import { DataContext } from "../../DataProcessing/DataProcessing";

const steps = [
  "Check coverage",
  "Choose package",
  "Details",
  "Review & submit",
];

export default function RequestConnectionBody() {
  const [activeStep, setActiveStep] = useState(0);
  const areaRef = useRef(); // <-- Ref to Area component
const { area } = useContext(DataContext);
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      // Step 0: Call checkAvailability from Area
      const success = await areaRef.current?.checkAvailability();
      if (!success) return; // Don't move forward if not successful
    }

    setActiveStep((prev) => prev + 1);
  };

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
        <RequestStepper activeStep={activeStep} steps={steps} />
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
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}
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
      </Box>
    </>
  );
}
