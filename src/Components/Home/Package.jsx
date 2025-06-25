import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import {
  Download,
  Installation,
  Setup,
  Support,
  Upload,
} from "./../../assets/Icons/Package/Icons";
import HalfRadialBarChart from "../Common/HalfRadialBarChart";

// Sample Data (you can import from another file too)
const packages = [
  {
    title: "PACKAGE-2",
    mbps: 20,
    price: 650,
    uploadSpeed: 20,
    downloadSpeed: 20,
    showAsFamous: true,
  },
  {
    title: "PACKAGE-4",
    mbps: 50,
    price: 950,
    uploadSpeed: 50,
    downloadSpeed: 50,
    showAsFamous: true,
  },
  {
    title: "PACKAGE-7",
    mbps: 90,
    price: 3000,
    uploadSpeed: 90,
    downloadSpeed: 90,
    showAsFamous: true,
  },
];

export default function Package() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Choose your broadband package
      </Typography>
      <Grid container spacing={3}>
        {packages.map((pkg) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            key={pkg.title}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                p: "24px",
                border: "1px solid #918EAF3D",
                borderRadius: "12px",
                textAlign: "center",
                width: "100%",
                maxWidth: "348px",
                background: "#FFF",
              }}
              gap="40px"
            >
              {/* Title & Price */}
              <Stack gap="16px">
                <Typography sx={{ textAlign: "left" }} color="text.primary">
                  <Box component="span" fontSize="20px" fontWeight={400}>
                    Up to
                  </Box>
                  <br />
                  <Box component="span" fontSize="24px" fontWeight={700}>
                    {pkg.mbps} Mbps
                  </Box>
                </Typography>
                <Typography sx={{ textAlign: "left" }} color="primary">
                  <Box component="span" fontSize="32px" fontWeight={700}>
                    ৳{pkg.price}
                  </Box>
                  <Box
                    component="span"
                    fontSize="14px"
                    fontWeight={400}
                    color="text.secondary"
                    sx={{ ml: 0.5 }}
                  >
                    /month
                  </Box>
                </Typography>
              </Stack>

              {/* Chart */}
              <HalfRadialBarChart speed={pkg.mbps} />

              {/* Upload/Download Speeds */}
              <Stack
                flexDirection="row"
                gap="24px"
                justifyContent="space-between"
                sx={{ p: "0px 64px" }}
              >
                <Stack
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="8px"
                >
                  <Download size="24px" color="#292D32" />
                  <Typography variant="body1">
                    {pkg.downloadSpeed} Mbps
                  </Typography>
                </Stack>
                <Stack
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="8px"
                >
                  <Upload size="24px" color="#292D32" />
                  <Typography variant="body1">
                    {pkg.uploadSpeed} Mbps
                  </Typography>
                </Stack>
              </Stack>

              {/* Features */}
              <Stack flexDirection="column" gap="16px">
                {[Setup, Installation, Support].map((Icon, index) => (
                  <Stack flexDirection="row" key={index}>
                    <Stack
                      flexDirection="column"
                      sx={{ width: "40px", height: "40px" }}
                    >
                      <Icon size="24px" />
                    </Stack>
                    <Stack
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Typography variant="subtitle1" color="text.secondary">
                        Setup charge
                      </Typography>
                      <Typography variant="h6" fontWeight="700">
                        1000 tk Fiber connection
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Button variant="soft">Request now</Button>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ mt: "64px", width: "100%" }} gap="16px" alignItems="center">
        <Typography color="text.secondary">
          Bill for 12 months and get a solid 10% discount with free fiber
          connection
        </Typography>
        <Button variant="outlined" sx={{ width: "100%", maxWidth: "240px" }}>
          See all packages
        </Button>
      </Stack>
    </Container>
  );
}
