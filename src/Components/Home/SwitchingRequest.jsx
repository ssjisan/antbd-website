import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import RequestConnection from "../../assets/Animation/RequestConnection";
import EnjoyInternet from "../../assets/Animation/EnjoyInternet";
import ExpertSetup from "../../assets/Animation/ExpertSetup";

export default function SwitchingRequest() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        We make switching broadband simple{" "}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack justifyContent="center" alignItems="center" sx={{border: "1px solid #918EAF3D", borderRadius:"16px"}}>
            <Box
      sx={{
        width: "100%",
        position: "relative",
        aspectRatio: "356 / 296",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <RequestConnection />
    </Box>
            <Stack gap="8px" sx={{ p: "24px", width: "100%", }}>
              <Typography variant="h6" color="text.secondary">
                STEP ONE
              </Typography>
              <Typography variant="h4">Request Connection</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack justifyContent="center" alignItems="center" sx={{border: "1px solid #918EAF3D", borderRadius:"16px"}}>
            <Box
      sx={{
        width: "100%",
        position: "relative",
        aspectRatio: "356 / 296",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >

            <ExpertSetup />
    </Box>
            <Stack gap="8px" sx={{ p: "24px", width: "100%", }}>
              <Typography variant="h6" color="text.secondary">
                STEP TWO
              </Typography>
              <Typography variant="h4">Expert Setup</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack justifyContent="center" alignItems="center" sx={{border: "1px solid #918EAF3D", borderRadius:"16px"}}>
            <Box
      sx={{
        width: "100%",
        position: "relative",
        aspectRatio: "356 / 296",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >

            <EnjoyInternet />
    </Box>
            <Stack gap="8px" sx={{ p: "24px", width: "100%", }}>
              <Typography variant="h6" color="text.secondary">
                STEP THREE
              </Typography>
              <Typography variant="h4">Enjoy Internet</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
