import { Box, Container, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";

// Ripple animation
const ripple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.9;
  }
  70% {
    transform: scale(2.4);
    opacity: 0;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

export default function CheckCoverage() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5} lg={5}></Grid>

        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "100%", sm: "100%", md: "560px" }, // responsive map height
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/Map.svg"
              alt="Map"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Pin + Ripple */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "120px", sm: "180px", md: "220px" }, // adjusted per screen
                right: { xs: "80px", sm: "160px", md: "256px" },  // maintain relative positioning
                rotate: "-26deg",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(233, 80, 9, 1)",
                  animation: `${ripple} 1.8s infinite ease-out`,
                }}
              />
              <Box
                component="img"
                src="/Pin.svg"
                alt="Pin"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "80px",
                  height: "auto",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
