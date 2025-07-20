import { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import PackageCard from "../Common/PackageCard"; // your card component
import { ArrowRight } from "../../assets/Icons/Common/Icons";
import PackageDetails from "./PackageDetails";

export default function AvailablePackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get("/all-packages");
        setPackages(res.data.packages || []);
      } catch (error) {
        console.error("Failed to load packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleOpenDetails = (pkg) => {
    setSelectedPackage(pkg);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedPackage(null);
  };

  if (loading) return <Typography>Loading packages...</Typography>;

  return (
    <Box sx={{ p: "48px 24px" }}>
      <Grid container rowSpacing={4} columnSpacing={4}>
        {packages.map((pkg) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            key={pkg.packageName}
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
                  {pkg.packageName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px !important",
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
                sx={{ my: "16px" }}
              >
                <Stack
                  flexDirection="row"
                  gap="8px"
                  alignItems="center"
                  sx={{ p: "2px" }}
                >
                  ✔️
                  <Typography variant="h6">
                    Speed {pkg.maxDownloadSpeed}Mbps max
                  </Typography>
                </Stack>
                <Stack
                  flexDirection="row"
                  gap="8px"
                  alignItems="center"
                  sx={{ p: "2px" }}
                >
                  ✔️
                  <Typography variant="h6">
                    Installation charge{" "}
                    {pkg.setupCharge ? `${pkg.setupCharge} taka` : "Free"}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                flexDirection="row"
                gap="4px"
                alignItems="center"
                sx={{
                  pt: "16px",
                  borderTop: "1px solid #918EAF3D",
                  cursor: "pointer",
                }}
                justifyContent="flex-end"
                onClick={() => handleOpenDetails(pkg)}
              >
                <Typography color="secondary">Package details</Typography>
                <ArrowRight size="16px" color="#ED1B24" />
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      {openModal && selectedPackage && (
        <PackageDetails pkg={selectedPackage} onClose={handleClose} />
      )}
    </Box>
  );
}
