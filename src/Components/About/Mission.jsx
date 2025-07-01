import { Grid, Container, Typography, Stack, Box } from "@mui/material";

const SVGMask = () => (
  <svg
    width="0"
    height="0"
    style={{ position: "absolute", left: "-9999px", top: 0 }}
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <mask
        id="customMask"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="560"
        height="380"
      >
        <rect width="560" height="380" fill="black" />
        <g transform="translate(560 0) scale(-1 1)">
          <path
            d="M0 250V30C0 13.4315 13.4314 0 30 0H530C546.569 0 560 13.4314 560 30V350.074C560 366.643 546.569 380.074 530 380.074H130C113.431 380.074 100 366.643 100 350.074V340C100 306.863 73.1371 280 40 280H30C13.4315 280 0 266.569 0 250Z"
            fill="white"
          />
        </g>
      </mask>
    </defs>
  </svg>
);

export default function Vision() {
  return (
    <Container sx={{ py: 8, position: "relative" }}>
      <SVGMask />
      <Grid container spacing={4} alignItems="center">
        {/* Responsive SVG Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", maxWidth: 560, mx: "auto" }}>
            <Box
              component="svg"
              viewBox="0 0 560 380"
              sx={{ width: "100%", height: "auto", display: "block" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask
                  id="customMaskInline"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="560"
                  height="380"
                >
                  <rect width="560" height="380" fill="black" />
                  <g transform="translate(560 0) scale(-1 1)">
                    <path
                      d="M0 250V30C0 13.4315 13.4314 0 30 0H530C546.569 0 560 13.4314 560 30V350.074C560 366.643 546.569 380.074 530 380.074H130C113.431 380.074 100 366.643 100 350.074V340C100 306.863 73.1371 280 40 280H30C13.4315 280 0 266.569 0 250Z"
                      fill="white"
                    />
                  </g>
                </mask>
              </defs>
              <image
                href="mission.png"
                width="560"
                height="380"
                mask="url(#customMaskInline)"
                preserveAspectRatio="xMidYMid slice"
              />
            </Box>
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Stack
            sx={{ pl: { md: "100px" }, mt: { xs: "32px", md: "0" } }}
            gap="24px"
          >
            <Typography variant="h2">Our Mission</Typography>
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
      </Grid>
    </Container>
  );
}
