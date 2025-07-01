import { Grid, Box, Container, Typography, Stack } from "@mui/material";

// Normalized SVG Mask Definition using objectBoundingBox
const SVGMask = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <mask
        id="customMask"
        maskUnits="objectBoundingBox"
        maskContentUnits="objectBoundingBox"
      >
        <rect width="1" height="1" fill="black" />
        <path
          d="
            M0,0.658 V0.079
            C0,0.036 0.024,0 0.0536,0
            H0.9464
            C0.976,0 1,0.036 1,0.079
            V0.921
            C1,0.964 0.976,1 0.9464,1
            H0.232
            C0.2024,1 0.1786,0.964 0.1786,0.921
            V0.894
            C0.1786,0.807 0.1307,0.736 0.0714,0.736
            H0.0536
            C0.024,0.736 0,0.7 0,0.658
            Z
          "
          fill="white"
        />
      </mask>
    </defs>
  </svg>
);

export default function Vision() {
  return (
    <Container sx={{ py: 8, position: "relative" }}>
      <SVGMask />
      <Grid container spacing={4} alignItems="center">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Stack sx={{ pr: { md: "64px" } }} gap={3}>
            <Typography variant="h2">Our Vision</Typography>
            <Typography variant="h5" color="text.secondary">
              Since the very beginning, our unwavering vision has been to become
              the most trusted and advanced internet service provider in
              Bangladesh. Driven by dedication and fueled by purpose, our team
              works tirelessly — day and night, with heart and soul — to turn
              that vision into reality. Every connection we build brings us one
              step closer to a digitally empowered Bangladesh.
            </Typography>
          </Stack>
        </Grid>

        {/* Responsive Masked Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "560 / 380",
              backgroundImage: "url('vision.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitMask: "url(#customMask)",
              mask: "url(#customMask)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              mx: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
