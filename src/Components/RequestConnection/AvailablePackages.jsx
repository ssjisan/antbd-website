import { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { ArrowRight } from "../../assets/Icons/Common/Icons";
import PackageDetails from "./PackageDetails";

export default function AvailablePackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  
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
      <Stack
        sx={{
          mb: 2,
          border: "1px solid primary.light",
          p: 2,
          textAlign: "center",
          borderRadius: "16px",
          backgroundColor: "primary.light",
        }}
        gap="8px"
      >
        <Typography variant="h6" color="primary">
          🎉 Awesome! Antaranga Dot Com Limited is ready to serve you in your
          area. <br />
          {/* You searched for: <strong>{coverageLocation.areaName}</strong> */}
        </Typography>
        <Button>Change location</Button>
      </Stack>

      <Grid container rowSpacing={4} columnSpacing={4}>
        {packages.map((pkg) => {
          const isSelected = selectedId === pkg._id;
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={pkg._id}
              sx={{ display: "flex", justifyContent: "center" }}
              // onClick={() => handleSelect(pkg._id)}
            >
              <Box
                sx={{
                  position: "relative",
                  p: "24px 16px",
                  border: isSelected
                    ? "1.5px solid #008641"
                    : "1.5px solid #918EAF3D",
                  borderRadius: "12px",
                  overflow: "hidden",
                  textAlign: "center",
                  width: "100%",
                  background: "#FFF",
                  cursor: "pointer",
                }}
              >
                <Stack
                  justifyContent="space-between"
                  flexDirection="row"
                  alignItems="center"
                >
                  <Stack gap="8px" alignItems="center" flexDirection="row">
                    <Stack
                      sx={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "20px",
                        border: isSelected
                          ? "2px solid #008641"
                          : "2px solid grey",
                      }}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {isSelected && (
                        <Box
                          sx={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#008641",
                          }}
                        />
                      )}
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: "16px !important",
                        fontWeight: "700 !important",
                      }}
                    >
                      {pkg.packageName}
                    </Typography>
                  </Stack>
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
                <Stack flexDirection="column" gap="8px" sx={{ my: "16px" }}>
                  <Stack flexDirection="row" gap="8px" alignItems="center">
                    ✔️
                    <Typography variant="h6">
                      Speed {pkg.maxDownloadSpeed}Mbps max
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row" gap="8px" alignItems="center">
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
                  }}
                  justifyContent="flex-end"
                >
                  <Stack
                    flexDirection="row"
                    gap="4px"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent selecting
                      handleOpenDetails(pkg);
                    }}
                  >
                    <Typography
                      color="primary"
                      sx={{ fontSize: "12px !important" }}
                    >
                      Package details
                    </Typography>
                    <ArrowRight size="16px" color="#008641" />
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {openModal && selectedPackage && (
        <PackageDetails pkg={selectedPackage} onClose={handleClose} />
      )}
    </Box>
  );
}
