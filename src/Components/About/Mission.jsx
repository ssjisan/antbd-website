import { Grid, Container, Typography, Stack, Box } from "@mui/material";

export default function Mission() {
  return (
    <Container sx={{ py: 8, position: "relative" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Image + SVG + Red Box */}
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
              src="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753685268/website/section-images/About/mission_wfx9au.webp"
              alt="Mission"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "32px",
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
                right: 0,
                width: "150px",
                height: "150px",
                zIndex: 2,
              }}
            >
              <path
                d="M120 30C136.569 30 150 16.5685 150 0V30H120Z"
                fill="white"
              />
              <path
                d="M30 60C30 43.4315 43.4315 30 60 30H150V130C150 141.046 141.046 150 130 150H30V60Z"
                fill="white"
              />
              <path
                d="M0 150C16.5685 150 30 136.569 30 120V150H0Z"
                fill="white"
              />
            </Box>

            {/* Red box in bottom right */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
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

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Stack
            sx={{ pl: { md: "100px" }, mt: { xs: "32px", md: "0" } }}
            gap="24px"
          >
            <Typography variant="h2">Our Mission</Typography>
            <Typography variant="h5" color="text.secondary">
              After providing service in only Dhaka city, we are now setting our
              goal towards other districts. We have set up our base at
              Chittagong and are working there. Soon, our mission is to connect
              all other districts within a short period of time.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
