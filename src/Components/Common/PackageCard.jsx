import { Box, Button, Stack, Typography } from "@mui/material";
import HalfRadialBarChart from "./HalfRadialBarChart";
import {
  Download,
  Installation,
  Setup,
  Support,
  Upload,
} from "../../assets/Icons/Package/Icons";
import PropTypes from "prop-types";

export default function PackageCard({ pkg }) {
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
            left: 0,
            width: "140px",
            height: "56px",
            pointerEvents: "none",
            zIndex: -1,
          }}
          dangerouslySetInnerHTML={{
            __html: `
        <svg width="140" height="56" viewBox="0 0 140 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C11.0457 0 20 8.95431 20 20V0H0Z" fill="url(#paint0_linear_714_1076)"/>
          <path d="M120 36C131.046 36 140 44.9543 140 56V36H120Z" fill="url(#paint1_linear_714_1076)"/>
          <path d="M20 0H140V36H28C23.5817 36 20 32.4183 20 28V0Z" fill="url(#paint2_linear_714_1076)"/>
          <defs>
            <linearGradient id="paint0_linear_714_1076" x1="0" y1="28" x2="140" y2="28" gradientUnits="userSpaceOnUse">
              <stop stop-color="#008641"/>
              <stop offset="1" stop-color="#18A25B"/>
            </linearGradient>
            <linearGradient id="paint1_linear_714_1076" x1="0" y1="28" x2="140" y2="28" gradientUnits="userSpaceOnUse">
              <stop stop-color="#008641"/>
              <stop offset="1" stop-color="#18A25B"/>
            </linearGradient>
            <linearGradient id="paint2_linear_714_1076" x1="0" y1="28" x2="140" y2="28" gradientUnits="userSpaceOnUse">
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
          {pkg.title}
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

      {/* Upload/Download */}
      <Stack
        flexDirection="row"
        gap="24px"
        justifyContent="space-between"
        sx={{ p: "32px 64px" }}
      >
        <Stack justifyContent="center" alignItems="center" gap="8px">
          <Download size="24px" color="#292D32" />
          <Typography variant="body1">{pkg.downloadSpeed} Mbps</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center" gap="8px">
          <Upload size="24px" color="#292D32" />
          <Typography variant="body1">{pkg.uploadSpeed} Mbps</Typography>
        </Stack>
      </Stack>

      {/* Features */}
      <Stack flexDirection="column" gap="16px" mb={4}>
        {[Setup, Installation, Support].map((Icon, index) => (
          <Stack flexDirection="row" key={index}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ width: "40px", height: "40px" }}
            >
              <Icon size="24px" />
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
                1000 tk Fiber connection
              </Typography>
            </Stack>
          </Stack>
        ))}
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
      >
        Request now
      </Button>
    </Box>
  );
}

PackageCard.propTypes = {
  pkg: PropTypes.shape({
    title: PropTypes.string.isRequired,
    mbps: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    uploadSpeed: PropTypes.number.isRequired,
    downloadSpeed: PropTypes.number.isRequired,
    showAsFamous: PropTypes.bool,
  }).isRequired,
};
