import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Download, Upload } from "../../assets/Icons/Package/Icons";
import packagesFake from "../../assets/packagesFake.json"; // adjust path as needed
import { Menu } from "../../assets/Icons/Navbar/Icons";
import { ArrowRight } from "../../assets/Icons/Common/Icons";

export default function AvailablePackages() {
  return (
    <Box sx={{ p: "48px 24px" }}>
      <Grid container rowSpacing={4} columnSpacing={4}>
        {packagesFake.map((pkg) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            key={pkg.title}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                p: "24px 16px",
                border: "1px solid #918EAF3D",
                overflow: "hidden",
                borderRadius: "12px",
                textAlign: "center",
                width: "100%",
                background: "#FFF",
              }}
            >
              <Stack
                justifyContent="space-between"
                flexDirection="row"
                alignItems="center"
              >
                <Typography
                  sx={{
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                  }}
                >
                  {pkg.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                  }}
                  color="text.secondary"
                >
                  ৳{pkg.price}/month
                </Typography>
              </Stack>
              <Stack
                flexDirection="column"
                gap="8px"
                justifyContent="space-between"
                sx={{ my:"16px" }}
              >
                <Stack flexDirection="row" gap="8px" alignItems="center" sx={{p:"2px"}}>
                  <Menu size="16px" color="#000"/>
                  <Typography>Speed 25Mbps max</Typography>
                </Stack>
                <Stack flexDirection="row" gap="8px" alignItems="center" sx={{p:"2px"}}>
                  <Menu size="16px" color="#000"/>
                  <Typography>Installation charge 1500 taka</Typography>
                </Stack>
              </Stack>
              <Stack flexDirection="row" gap="4px" alignItems="center" sx={{pt:"16px", borderTop:"1px solid #918EAF3D"}} justifyContent="flex-end">
                  <Typography>Package details</Typography>
                  <ArrowRight size="16px" color="#000"/>
                </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
