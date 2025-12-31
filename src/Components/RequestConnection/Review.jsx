import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../DataProcessing/DataContext";
import { Button, Container, Stack, Typography } from "@mui/material";
import axios from "axios";

export default function Review() {
  const [packageData, setPackageData] = useState(null);

  const { packageId, formData } = useContext(DataContext);

  useEffect(() => {
    if (!packageId) return;

    const fetchPackage = async () => {
      try {
        const res = await axios.get(`/package/${packageId}`);
        setPackageData(res.data);
      } catch (err) {
        console.error("Failed to fetch package", err);
      }
    };

    fetchPackage();
  }, [packageId]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        gap="24px"
        sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" } }}
      >
        <Stack
          sx={{
            p: "24px",
            borderRadius: "16px",
            boxShadow: "0px 0.86px 52.13px -8.57px #66666624",
          }}
          gap="16px"
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
              pb: "8px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "700 !important" }}>
              Personal details
            </Typography>
            <Button>Change</Button>
          </Stack>
          <Stack
            flexDirection="row"
            gap="64px"
            alignItems="center"
            sx={{
              borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
              pb: "8px",
            }}
          >
            <Typography variant="body1" sx={{ width: "120px" }}>
              Full name
            </Typography>
            <Typography variant="body1">{formData.name}</Typography>
          </Stack>
          <Stack
            flexDirection="row"
            gap="64px"
            alignItems="center"
            sx={{
              borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
              pb: "8px",
            }}
          >
            <Typography variant="body1" sx={{ width: "120px" }}>
              Mobile
            </Typography>
            <Typography variant="body1">{formData.mobile}</Typography>
          </Stack>
          <Stack
            flexDirection="row"
            gap="64px"
            alignItems="center"
            sx={{
              borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
              pb: "8px",
            }}
          >
            <Typography variant="body1" sx={{ width: "120px" }}>
              Email
            </Typography>
            <Typography variant="body1">{formData.email}</Typography>
          </Stack>
          <Stack
            flexDirection="row"
            gap="64px"
            alignItems="center"
            sx={{
              borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
              pb: "8px",
            }}
          >
            <Typography variant="body1" sx={{ width: "120px" }}>
              Zone
            </Typography>
            <Typography variant="body1">{formData.zone}</Typography>
          </Stack>
          <Stack
            flexDirection="row"
            gap="64px"
            alignItems="center"
            sx={{
              borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
              pb: "8px",
            }}
          >
            <Typography variant="body1" sx={{ minWidth: "120px" }}>
              Area
            </Typography>
            <Typography variant="body1">{formData.area}</Typography>
          </Stack>
          <Stack
            flexDirection="row"
            gap="64px"
            alignItems="center"
            sx={{ pb: "8px" }}
          >
            <Typography variant="body1" sx={{ width: "120px" }}>
              Full address
            </Typography>
            <Typography variant="body1">{formData.fullAddress}</Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            p: "24px",
            borderRadius: "16px",
            boxShadow: "0px 0.86px 52.13px -8.57px #66666624",
          }}
          gap="16px"
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
              pb: "8px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "700 !important" }}>
              Bill summary
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "700 !important" }}
              color="primary"
            >
              {packageData && packageData.price + packageData.setupCharge}৳
            </Typography>
          </Stack>

          {packageData ? (
            <>
              <Stack
                flexDirection="row"
                gap="64px"
                alignItems="center"
                sx={{
                  borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
                  pb: "8px",
                }}
              >
                <Typography variant="body1" sx={{ width: "120px" }}>
                  Monthly Package
                </Typography>
                <Typography variant="body1">
                  {packageData.packageName}
                </Typography>
              </Stack>

              <Stack
                flexDirection="row"
                gap="64px"
                alignItems="center"
                sx={{
                  borderBottom: "1px solid rgba(90, 89, 105, 0.24)",
                  pb: "8px",
                }}
              >
                <Typography variant="body1" sx={{ width: "120px" }}>
                  Price
                </Typography>
                <Typography variant="body1">{packageData.price}৳</Typography>
              </Stack>

              <Stack
                flexDirection="row"
                gap="64px"
                alignItems="center"
                sx={{ pb: "8px" }}
              >
                <Typography variant="body1" sx={{ width: "120px" }}>
                  Setup Charge
                </Typography>
                <Typography variant="body1">
                  {packageData.setupCharge === 0
                    ? "Free"
                    : `${packageData.setupCharge}৳`}
                </Typography>
              </Stack>
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
                <Typography variant="h5" sx={{ fontWeight: "700 !important" }}>
                  🎁 Pay 3 months in advance and get free setup!
                </Typography>
              </Stack>
            </>
          ) : (
            <Typography variant="body1">Loading package data...</Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
