import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

export default function FirstPackage() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack sx={{ pt: "40px" }} gap="40px">
            <Stack gap="16px">
              <Stack flexDirection="row" gap="16px" alignItems="center">
                <Box
                  sx={{
                    p: "2px 8px",
                    background: "#008641",
                    width: "fit-content",
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px !important",
                      lineHeight: "14px",
                      color: "#FFF",
                    }}
                  >
                    Starting from
                  </Typography>
                </Box>
                <Typography variant="h2" color="error">
                  ৳500
                </Typography>
              </Stack>
              <Stack gap="16px">
                <Stack flexDirection="row" alignItems="center" gap="8px">
                  <Typography color="secondary">
                    <Box
                      component="span"
                      sx={{
                        fontSize: "80px",
                        fontWeight: "bold",
                        lineHeight: 1,
                      }}
                    >
                      10
                    </Box>
                    <Box
                      component="span"
                      sx={{ fontSize: "40px", fontWeight: "normal", ml: 0.5 }}
                    >
                      Mbps
                    </Box>
                  </Typography>
                  <Box
                    sx={{ width: "80px", height: "80px", overflow: "visible" }}
                  >
                    <img
                      src="/rocket.gif"
                      alt="rocket"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "cover",
                        rotate: "6deg",
                      }}
                    />
                  </Box>
                </Stack>
                <Typography variant="h5">
                  Explore high-speed fiber internet packages for binging,
                  streaming, gaming and working.
                </Typography>
              </Stack>
            </Stack>
            <Button color="primary" variant="contained" sx={{ width: "180px" }}>
              Request Now
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "32px",
              height: "380px",
              overflow: "hidden",
            }}
          >
            {/* Background Image */}
            <img
              src="/first-package.png"
              alt="first_package"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />

            {/* SVG 1 — Body at Top Left */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,display: { xs: "none", sm: "block" },
              }}
            >
              <svg
                width="264"
                height="108"
                viewBox="0 0 264 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H264V68C264 90.0914 246.091 108 224 108H0V0Z"
                  fill="#FFF"
                />
              </svg>
            </Box>

            {/* SVG 2 — Round at Left (top: 98px) */}
            <Box
              sx={{
                position: "absolute",
                top: "108px",
                left: 0,display: { xs: "none", sm: "block" },
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M40 0C17.9086 0 0 17.9086 0 40V0H40Z" fill="#FFF" />
              </svg>
            </Box>

            {/* SVG 3 — Round at Top Right (left: 256px) */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "264px",display: { xs: "none", sm: "block" },
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M40 0C17.9086 0 0 17.9086 0 40V0H40Z" fill="#FFF" />
              </svg>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
