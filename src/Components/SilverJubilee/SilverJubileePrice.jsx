import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DataContext } from "../../DataProcessing/DataContext";
import { useContext } from "react";
import { Bullet } from "../../assets/Icons/Common/Icons";
import { useNavigate } from "react-router-dom";

export default function SilverJubileePrice() {
  const { specialPackages } = useContext(DataContext);
  const { setPackageId } = useContext(DataContext);
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const forBelow575 = useMediaQuery("(max-width:575px)");
  const navigate = useNavigate();
  const handleRequestClick = () => {
    setPackageId(pkg._id); // Save package ID to context
    navigate("/request-connection");
  };
  const pkg = Array.isArray(specialPackages) ? specialPackages[0] : null;

  if (!pkg) return null;

  return (
    <Container sx={{ p: forBelow575 ? "40px 16px" : "64px 0px" }}>
      <Grid
        container
        sx={{
          width: "100%",
          padding: "16px",
          borderRadius: "12px",
          background: "#ffffffff",
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)",

          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow:
              "0 12px 32px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.05)",
          },
        }}
      >
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box
            sx={{
              width: "100%",
              height: "260px",
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundImage: "url('/abstract.png')", // put image in /public
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "16px",
                bottom: "16px",
                zIndex: 1,
                color: "#fff",
                textAlign: "left",
              }}
            >
              <Box component="span" fontSize="20px" fontWeight={400}>
                Up to
              </Box>
              <br />
              <Box component="span" fontSize="32px" fontWeight={700}>
                {pkg.maxDownloadSpeed} Mbps
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          sx={{
            paddingLeft: forBelow767 ? "0px" : "24px",
            paddingTop: forBelow767 ? "24px" : "0px",
          }}
        >
          <Stack>
            <Typography variant="h3">{pkg.packageName}</Typography>
            <Typography color="text.secondary">
              Reliable service with priority support from a trusted network
            </Typography>
          </Stack>
          <Stack flexDirection={forBelow575 ? "column" : "row"} mt={5}>
            <Stack flexDirection="column" gap="8px" sx={{ width: "100%" }}>
              <Stack flexDirection="row" gap="12px" alignItems="center">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Typography variant="body" fontWeight={600}>
                  {pkg.maxDownloadSpeed} Mbps Download
                </Typography>
              </Stack>
              <Stack flexDirection="row" gap="12px" alignItems="center">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Typography variant="body" fontWeight={600}>
                  {pkg.maxUploadSpeed} Mbps Upload
                </Typography>
              </Stack>
              <Stack flexDirection="row" gap="12px" alignItems="center">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Typography variant="body" fontWeight={600}>
                  24/7 Customer Support
                </Typography>
              </Stack>
              <Stack flexDirection="row" gap="12px" alignItems="center">
                <Stack
                  sx={{ width: "32px", height: "32px" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Bullet size="24px" color="#008641" />
                </Stack>
                <Typography variant="body" fontWeight={600}>
                  Connection Type{" "}
                  {Array.isArray(pkg.connectionType)
                    ? pkg.connectionType.includes(0) &&
                      pkg.connectionType.includes(1)
                      ? "CAT-5 / Fiber"
                      : pkg.connectionType.includes(0)
                      ? "CAT-5"
                      : pkg.connectionType.includes(1)
                      ? "Fiber"
                      : "Unknown"
                    : pkg.connectionType === 0
                    ? "CAT-5"
                    : pkg.connectionType === 1
                    ? "Fiber"
                    : "Unknown"}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                width: "100%",
                paddingLeft: forBelow575 ? "0px" : "20px",
                borderLeft: forBelow575 ? "none" : "1px solid #ccc",
                paddingTop: forBelow575 ? "32px" : "0px",
              }}
              alignItems="flex-start"
              justifyContent="center"
              gap="24px"
            >
              <Stack gap="16px">
                <Typography sx={{ textAlign: "left" }} color="primary">
                  <Box component="span" fontSize="48px" fontWeight={700}>
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
                <Typography color="text.secondary">
                  Setup charge 1000 tk/ Fiber
                </Typography>
              </Stack>
              <Button variant="contained" onClick={handleRequestClick}>
                Request
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
