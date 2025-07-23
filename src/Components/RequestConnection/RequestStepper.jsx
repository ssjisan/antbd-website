import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function RequestStepper({ activeStep, steps, completedSteps = [] }) {
  // Convert completedSteps array to object: { 0: true, 1: true, ... }
  const completed = completedSteps.reduce((acc, index) => {
    acc[index] = true;
    return acc;
  }, {});

  return (
    <Box sx={{ width: "100%", mb: "40px" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        completed={completed} // ✅ use this prop instead of per-step
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

RequestStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  completedSteps: PropTypes.arrayOf(PropTypes.number),
};
