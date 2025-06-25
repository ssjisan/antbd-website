import { Grid, Box, Button, Container, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Container sx={{ py: { xs: 3, sm: 3, md: 6 }, position: "relative" }}>
      <Box
        sx={{
          height: { xs: "85vh", sm: "85vh", md: 480 },
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#100122",
          display: "flex",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left Text Section - 40% */}
          <Grid
            item
            xs={12}
            sm={12}
            md={5} // roughly 40% of 12
            sx={{
              color: "#fff",
              p: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 3,
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px !important",
                fontWeight: "700 !important",
                mb: 1,
              }}
            >
              Get a Faster Fiber Deal <br />
              From only
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "primary.main",
              }}
            >
              <Box component="span" sx={{ fontSize: 32, lineHeight: 1 }}>
                ৳
              </Box>
              <Box
                component="span"
                sx={{
                  fontSize: 80,
                  lineHeight: 1,
                  fontWeight: "800 !important",
                }}
              >
                950
              </Box>
              <Box component="span" sx={{ fontSize: 20, lineHeight: 1 }}>
                /month
              </Box>
            </Typography>

            <Button
              variant="contained"
              sx={(theme) => ({
                mt: 3,
                borderRadius: 1,
                padding: "10px 24px",
                border: "1px solid #fff",
                background: "transparent",
                color: "#fff",
                transition: "all 0.2s ease-in-out",
                transform: "scale(1)",
                "&:hover": {
                  transform: "scale(0.9)",
                  border: `1px solid ${theme.palette.primary.dark}`,
                },
                width: "max-content",
              })}
            >
              Get Started
            </Button>
          </Grid>

          {/* Right Image Section - 60% */}
          <Grid
            item
            xs={12}
            sm={12}
            md={7} // roughly 60% of 12
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 0,
            }}
          >
            <Box
              component="img"
              src="/bg.png"
              alt="Hero Image"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                background: {
                  xs: "linear-gradient(0.92deg, rgba(16, 1, 34, 0) 51.74%, #100122 96.24%)", // sm and below
                  sm: "linear-gradient(0.92deg, rgba(16, 1, 34, 0) 51.74%, #100122 96.24%)",
                  md: "linear-gradient(270.24deg, rgba(16, 1, 34, 0) 37.96%, #100122 93.03%)", // md and up
                },
                pointerEvents: "none",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
