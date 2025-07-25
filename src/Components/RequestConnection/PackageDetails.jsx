import { Box, Button, Grow , Stack, Typography } from "@mui/material";
import {
  ConnectionType,
  Download,
  Installation,
  Setup,
  Upload,
} from "../../assets/Icons/Package/Icons";
import HalfRadialBarChart from "../Common/HalfRadialBarChart";
import { Close } from "../../assets/Icons/Common/Icons";
import PropTypes from "prop-types";

export default function PackageDetails({ pkg, onClose }) {
  if (!pkg) return null;

  return (
    <Box
        sx={{
          position: "fixed",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.5)",
          zIndex: 1400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(2px)", // <--- This line adds the blur
          WebkitBackdropFilter: "blur(2px)", // Safari support
          p: 2,
        }}
        onClick={onClose}
      >
        <Grow  in={Boolean(pkg)} timeout={600}>
        <Box
          sx={{
            position: "relative",
            borderRadius: "12px",
            p: 2,
            maxWidth: 380,
            width: "100%",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Red circular close button */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              cursor: "pointer",
              width: 40,
              height: 40,
              borderRadius: "50%",
              bgcolor: "error.main",
              color: "common.white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 18,
              userSelect: "none",
              boxShadow: (theme) => theme.shadows[3],
              zIndex: 1111111111,
            }}
            onClick={onClose}
            aria-label="close card"
            role="button"
          >
            <Close size="20px" color="#FFF" />
          </Box>

          <Box
            sx={{
              position: "relative",
              p: "24px",
              overflow: "hidden",
              borderRadius: "12px",
              textAlign: "center",
              width: "100%",
              maxWidth: "348px",
              background: "#FFF",
              transition: "all 0.3s ease-in-out",
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
                <Typography variant="body1">
                  {pkg.maxDownloadSpeed} Mbps
                </Typography>
              </Stack>
              <Stack justifyContent="center" alignItems="center" gap="8px">
                <Upload size="24px" color="#292D32" />
                <Typography variant="body1">
                  {pkg.maxUploadSpeed} Mbps
                </Typography>
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
            >
              Confirm
            </Button>
          </Box>
        </Box>
    </Grow >
      </Box>
  );
}
PackageDetails.propTypes = {
  pkg: PropTypes.shape({
    packageName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    maxDownloadSpeed: PropTypes.number.isRequired,
    maxUploadSpeed: PropTypes.number.isRequired,
    setupCharge: PropTypes.number,
    connectionType: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),
  }),
  onClose: PropTypes.func.isRequired,
};
