import { Container, Grid, Stack, Typography } from "@mui/material";

export default function SwitchingRequest() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        We make switching broadband simple{" "}
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
                borderRadius:"8px"
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img src="1.png" alt="request" />
            </Stack>
            <Stack
              gap="12px"
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h4">Request Connection</Typography>
              <Typography variant="h6" color="text.secondary">
                Fill out a quick form or call us — we’ll take it from there.
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
                borderRadius:"8px"
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img src="2.png" alt="request" />
            </Stack>
            <Stack
              gap="12px"
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h4">Expert Setup</Typography>
              <Typography variant="h6" color="text.secondary">
                Our expert team will handle everything — clean, fast, and on
                time.
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
                borderRadius:"8px"
              }}
              justifyContent="center"
              alignItems="center"
            >
              <img src="3.png" alt="request" />
            </Stack>
            <Stack
              gap="12px"
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h4">Enjoy Internet</Typography>
              <Typography variant="h6" color="text.secondary">
                Sit back and experience blazing speed, reliable uptime, and zero
                worries.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
