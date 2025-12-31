import { Box, Button, Stack, Typography } from "@mui/material";
import {
  ConnectionType,
  Download,
  Installation,
  Setup,
  Upload,
} from "../../assets/Icons/Package/Icons";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataContext";
import { useNavigate } from "react-router-dom";

export default function SilverJubileePackageCard({ pkg }) {
  const { setPackageId } = useContext(DataContext);
  const navigate = useNavigate();
  const handleRequestClick = () => {
    setPackageId(pkg._id); // Save package ID to context
    navigate("/request-connection");
  };
  return (
    <Box
      sx={{
        position: "relative",
        p: "12px",
        border: "1px solid #918EAF3D",
        overflow: "hidden",
        borderRadius: "12px",
        textAlign: "center",
        width: "100%",
        maxWidth: "396px",
        background: "#FFF",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
          borderColor: "primary.main",
        },
        "&:hover .hover-button": {
          backgroundColor: "primary.main",
          color: "#fff",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "196px",
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
            width: "100%",
            textAlign: "right",
            padding: "16px 16px 0px",
            color: "#fff",
          }}
        >
          <Typography variant="body">#special</Typography>
          <Typography variant="h4" fontWeight={700}>
            {pkg.packageName}
          </Typography>
        </Box>
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
          <Box component="span" fontSize="24px" fontWeight={700}>
            {pkg.maxDownloadSpeed} Mbps
          </Box>
        </Box>
      </Box>

      {/* Title & Price */}
      <Stack gap="16px" mb={4} mt={4}>
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

      {/* Upload/Download */}
      <Stack
        flexDirection="row"
        gap="24px"
        justifyContent="space-between"
        sx={{ p: "32px 64px" }}
      >
        <Stack justifyContent="center" alignItems="center" gap="8px">
          <Download size="24px" color="#292D32" />
          <Typography variant="body1">{pkg.maxDownloadSpeed} Mbps</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center" gap="8px">
          <Upload size="24px" color="#292D32" />
          <Typography variant="body1">{pkg.maxUploadSpeed} Mbps</Typography>
        </Stack>
      </Stack>

      <Stack flexDirection="column" gap="16px" mb={4}>
        <Stack flexDirection="row">
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "40px", height: "40px" }}
          >
            <ConnectionType size="24px" />
          </Stack>
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 2 }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Connection Type
            </Typography>
            <Typography variant="h6" fontWeight={700}>
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
        <Stack flexDirection="row">
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "40px", height: "40px" }}
          >
            <Setup size="24px" />
          </Stack>
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 2 }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Setup charge
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {Array.isArray(pkg.connectionType)
                ? pkg.connectionType.includes(1)
                  ? `${pkg.setupCharge} tk/ Fiber`
                  : "Free setup"
                : pkg.connectionType === 1
                ? `${pkg.setupCharge} tk/ Fiber`
                : pkg.connectionType === 0
                ? "Free setup"
                : "Free setup"}
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row">
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "40px", height: "40px" }}
          >
            <Installation size="24px" />
          </Stack>
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 2 }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Free installation
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              Wifi router, TV
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Request Button */}
      <Button
        variant="soft"
        fullWidth
        className="hover-button"
        sx={{
          transition: "all 0.3s ease-in-out",
          fontWeight: 600,
        }}
        onClick={handleRequestClick}
      >
        Request now
      </Button>
    </Box>
  );
}

SilverJubileePackageCard.propTypes = {
  pkg: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    packageName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    maxDownloadSpeed: PropTypes.number.isRequired,
    maxUploadSpeed: PropTypes.number.isRequired,
    connectionType: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]).isRequired,
    setupCharge: PropTypes.number.isRequired,
    popUp: PropTypes.bool,
  }).isRequired,
};
