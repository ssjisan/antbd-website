import { Box, Button, Stack, Typography } from "@mui/material";
import HalfRadialBarChart from "./HalfRadialBarChart";
import {
  ConnectionType,
  Download,
  Installation,
  Setup,
  Upload,
} from "../../assets/Icons/Package/Icons";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useNavigate } from "react-router-dom";

export default function PackageCard({ pkg }) {
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
        p: "24px",
        border: "1px solid #918EAF3D",
        overflow: "hidden",
        borderRadius: "12px",
        textAlign: "center",
        width: "100%",
        maxWidth: "348px",
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
      {/* Top-right Title Badge with full SVG on top-left and manually positioned text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "56px", // match SVG height
          width: "140px", // match SVG width
          color: "#fff",
          zIndex: 1,
          borderBottomLeftRadius: "12px",
          overflow: "visible",
        }}
      >
        {/* Full SVG placed absolutely on top-left */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "120px",
            height: "56px",
            pointerEvents: "none",
            zIndex: -1,
          }}
          dangerouslySetInnerHTML={{
            __html: `
        <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H120V36H8C3.58172 36 0 32.4183 0 28V0Z" fill="url(#paint0_linear_714_1076)"/>
<defs>
<linearGradient id="paint0_linear_714_1076" x1="-20" y1="28" x2="120" y2="28" gradientUnits="userSpaceOnUse">
<stop stop-color="#008641"/>
<stop offset="1" stop-color="#18A25B"/>
</linearGradient>
</defs>
</svg>

      `,
          }}
        />

        {/* Manually positioned title text */}
        <Box
          sx={{
            position: "relative", // relative to this Box container
            top: "8px", // adjust vertical position
            left: "12px", // adjust horizontal position
            fontSize: "14px",
            fontWeight: 600,
            userSelect: "none",
            pointerEvents: "none", // prevent interference with mouse
            whiteSpace: "nowrap",
          }}
        >
          {pkg.packageName}
        </Box>
      </Box>

      {/* Title & Price */}
      <Stack gap="16px" mb={4}>
        <Typography sx={{ textAlign: "left" }} color="text.primary">
          <Box component="span" fontSize="20px" fontWeight={400}>
            Up to
          </Box>
          <br />
          <Box component="span" fontSize="24px" fontWeight={700}>
            {pkg.maxDownloadSpeed} Mbps
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
      <HalfRadialBarChart speed={pkg.maxDownloadSpeed} />

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

PackageCard.propTypes = {
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
