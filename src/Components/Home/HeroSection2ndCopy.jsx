import { Grid, Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection2nd() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <Container sx={{ py: { xs: 3, sm: 3, md: 6 }, position: "relative" }}>
      <Box
        sx={{
          height: { xs: "85vh", sm: "85vh", md: 480 },
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#fdf8eb",
          display: "flex",
          border: "1px solid #fdf8eb",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left Text Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            sx={{
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
                color: "secondary.main",
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
              component={Link}
              to="/request-connection"
              sx={(theme) => ({
                mt: 3,
                borderRadius: 1,
                padding: "10px 24px",
                border: `1px solid ${theme.palette.primary}`,
                background: `${theme.palette.primary}`,
                color: "#fff",
                transition: "all 0.2s ease-in-out",
                transform: "scale(1)",
                "&:hover": {
                  transform: "scale(0.9)",
                  background: "transparent",
                  border: `1px solid ${theme.palette.primary}`,
                  color: `${theme.palette.primary}`,
                },
                width: "max-content",
              })}
            >
              Get Started
            </Button>
          </Grid>

          {/* Right Video Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 0,
              backgroundColor: "#fdf8eb",
            }}
          >
            {/* Background placeholder while video loads */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://via.placeholder.com/800x600/100122/ffffff?text=Loading...')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                opacity: videoLoaded ? 0 : 1,
                transition: "opacity 0.5s ease-in-out",
              }}
            />

            {/* Video */}
            <Box
              component="video"
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={() => setVideoLoaded(true)}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                zIndex: 2,
                position: "relative",
              }}
            >
              <source src="silver_jubilee_white.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                zIndex: 3,
                pointerEvents: "none",
                // background: {
                //   xs: "linear-gradient(0.92deg, rgba(16, 1, 34, 0) 51.74%, #100122 96.24%)",
                //   sm: "linear-gradient(0.92deg, rgba(16, 1, 34, 0) 51.74%, #100122 96.24%)",
                //   md: "linear-gradient(270.24deg, rgba(16, 1, 34, 0) 37.96%, #100122 93.03%)",
                // },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
