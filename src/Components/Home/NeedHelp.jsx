import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function NeedHelp() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Need help?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack gap="36px" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                width: "100px",
                height: "100px",
                border: "1px solid #00000014",
                boxShadow: "0px 0.86px 52.13px -8.57px #00000024",
                p: "32px 0px",
                borderRadius: "8px",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img src="n1.webp" alt="request" width="100%"/>
            </Stack>
            <Stack
              gap="12px"
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h4">To get connected with us</Typography>
              <Typography variant="h6" color="text.secondary">
                Call us on{" "}
                <Box
                  component="span"
                  sx={{
                    textDecoration: "underline",
                    color: "#008641",
                  }}
                >
                  0808 196 6262
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Monday to Friday, 9am - 8pm, weekends and bank holidays,9am -
                5pm.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack gap="36px" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                width: "100px",
                height: "100px",
                border: "1px solid #00000014",
                boxShadow: "0px 0.86px 52.13px -8.57px #00000024",
                p: "32px 0px",
                borderRadius: "8px",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img src="n2.webp" alt="request" width="100%"/>
            </Stack>
            <Stack
              gap="12px"
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h4">For Customer Service</Typography>
              <Typography variant="h6" color="text.secondary">
                Call us on{" "}
                <Box
                  component="span"
                  sx={{
                    textDecoration: "underline",
                    color: "#008641",
                  }}
                >
                  0808 196 6262
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Monday to Friday, 9am - 8pm, weekends and bank holidays,9am -
                5pm.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack gap="36px" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                width: "100px",
                height: "100px",
                border: "1px solid #00000014",
                boxShadow: "0px 0.86px 52.13px -8.57px #00000024",
                p: "32px 0px",
                borderRadius: "8px",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img src="n3.webp" alt="request"  width="100%"/>
            </Stack>
            <Stack
              gap="12px"
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h4">For more help</Typography>
              <Typography
                variant="h6"
                sx={{ textDecoration: "underline", color: "#008641" }}
              >
                Visit our Help pages
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Monday to Friday, 9am - 8pm, weekends and bank holidays,9am -
                5pm.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
