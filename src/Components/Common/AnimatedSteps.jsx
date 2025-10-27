import { Stack, Typography, Box, keyframes, useMediaQuery } from "@mui/material";

// Horizontal dash animation
const moveDashX = keyframes`
  from { background-position: 0 0; }
  to { background-position: 40px 0; }
`;

// Vertical dash animation
const moveDashY = keyframes`
  from { background-position: 0 0; }
  to { background-position: 0 20px; }
`;

export default function AnimatedSteps() {
  const isMobile = useMediaQuery("(max-width:575px)");

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ mt: "24px" }}
    >
      {/* Step 1 */}
      <Typography variant="h6" color="text.primary" sx={{ whiteSpace: "nowrap" }}>
        1. Search area
      </Typography>

      {/* Animated line */}
      <Box sx={isMobile ? animatedLineY : animatedLineX} />

      {/* Step 2 */}
      <Typography variant="h6" color="text.primary" sx={{ whiteSpace: "nowrap" }}>
        2. Check availability
      </Typography>

      {/* Animated line */}
      <Box sx={isMobile ? animatedLineY : animatedLineX} />

      {/* Step 3 */}
      <Typography variant="h6" color="text.primary" sx={{ whiteSpace: "nowrap" }}>
        3. Submit order
      </Typography>
    </Stack>
  );
}

// 🔹 Horizontal animated line style
const animatedLineX = {
  flex: 1,
  height: "2px",
  minWidth: "60px",
  background:
    "repeating-linear-gradient(90deg, #008641, #008641 8px, transparent 8px, transparent 16px)",
  animation: `${moveDashX} 2s linear infinite`,
  backgroundSize: "40px 2px",
};

// 🔹 Vertical animated line style
const animatedLineY = {
  width: "2px",
  height: "40px",
  background:
    "repeating-linear-gradient(180deg, #008641, #008641 8px, transparent 8px, transparent 16px)",
  animation: `${moveDashY} 2s linear infinite`,
  backgroundSize: "2px 20px",
};
