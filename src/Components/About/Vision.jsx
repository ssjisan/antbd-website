import { Grid, Container, Typography, Stack, Box } from "@mui/material";

export default function Vision() {
  return (
    <Container sx={{ py: 8, position: "relative" }}>
      <Grid container spacing={4} alignItems="center">
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
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 560,
              mx: "auto",
              position: "relative",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="vision.png"
              alt="Mission"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                display: "block",
              }}
            />

            {/* SVG in bottom right */}
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 150"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "150px",
                height: "150px",
                zIndex: 2,
              }}
            >
              <path d="M30 30C13.4315 30 0 16.5685 0 0V30H30Z" fill="white" />
              <path
                d="M0 30H90C106.569 30 120 43.4315 120 60V150H0V30Z"
                fill="white"
              />
              <path
                d="M150 150C133.431 150 120 136.569 120 120V150H150Z"
                fill="white"
              />
            </Box>

            {/* Red box in bottom right */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100px",
                height: "100px",
                borderRadius: "20px",
                backgroundColor: "#EFEFEF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3,
              }}
            >
              <Box
                component="img"
                src="/amar_internet_antbd.png"
                alt="ANTBD"
                sx={{ width: "80px", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
