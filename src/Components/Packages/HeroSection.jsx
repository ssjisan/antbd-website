import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

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
          {/* Left Content Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
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
            <Stack sx={{ pt: "16px" }} gap="32px">
              <Stack gap="16px">
                <Stack flexDirection="row" gap="16px" alignItems="center">
                  <Box
                    sx={{
                      p: "2px 8px",
                      background: "#FFF",
                      width: "fit-content",
                      borderRadius: "16px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        lineHeight: "14px",
                        color: "#100122",
                      }}
                    >
                      Starting from
                    </Typography>
                  </Box>
                  <Typography variant="h2" color="error">
                    ৳500
                  </Typography>
                </Stack>

                <Stack flexDirection="row" alignItems="center" gap="12px">
                  <Typography color="error">
                    <Box
                      component="span"
                      sx={{
                        fontSize: "72px",
                        fontWeight: "bold",
                        lineHeight: 1,
                      }}
                    >
                      10
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: "36px",
                        fontWeight: "normal",
                        ml: 0.5,
                      }}
                    >
                      Mbps
                    </Box>
                  </Typography>

                  <Box sx={{ width: "72px", height: "72px" }}>
                    <img
                      src="/rocket.gif"
                      alt="rocket"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "cover",
                        transform: "rotate(6deg)",
                      }}
                    />
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ color: "#ccc" }}>
                  Explore high-speed fiber internet packages for binging,
                  streaming, gaming and working.
                </Typography>
              </Stack>

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
             Request Now
            </Button>
            </Stack>
          </Grid>

          {/* Right Image Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 0,
            }}
          >
            <Box
              component="img"
              src="/bg_payment.jpg"
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
                  xs: "linear-gradient(0.92deg, rgba(16, 1, 34, 0) 51.74%, #100122 96.24%)",
                  sm: "linear-gradient(0.92deg, rgba(16, 1, 34, 0) 51.74%, #100122 96.24%)",
                  md: "linear-gradient(270.24deg, rgba(16, 1, 34, 0) 37.96%, #100122 93.03%)",
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
