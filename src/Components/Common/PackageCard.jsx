import { Box, Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataContext";
import { useNavigate } from "react-router-dom";
import ArrowPointer from "../../assets/Icons/ArrowPointer";

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
        p: "16px",
        border: "1px solid #918EAF3D",
        overflow: "hidden",
        borderRadius: "12px",
        textAlign: "center",
        width: "100%",
        maxWidth: "348px",
        background: "#F1FFF2",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
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
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#247940" }}>
        {pkg.packageName}
      </Typography>

      {/* Title & Price */}
      <Stack
        flexDirection={"row"}
        sx={{
          background: "#247940",
          height: "140px",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "64px",
              lineHeight: "56px",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
            }}
          >
            {pkg.maxDownloadSpeed}
          </p>
          <p
            style={{
              fontSize: "24px",
              lineHeight: "20px",
              color: "#C4F50D",
              margin: 0,
              marginTop: "-2px", // controlled overlap
            }}
          >
            Mbps
          </p>
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(0deg, #247940 6.6%, #C4F50D 49.06%, #247940 91.51%)",
            width: "4px",
            height: "100%",
          }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              lineHeight: "20px",
              color: "#ffffff",
              margin: 0,
              transform: "translateX(-40px)", // move left
            }}
          >
            BDT
          </p>

          <p
            style={{
              fontSize: "48px",
              lineHeight: "56px",
              fontWeight: 700,
              color: "#C4F50D",
              margin: 0,
              textAlign: "center",
            }}
          >
            {pkg.price}
          </p>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "20px",
              color: "#ffffff",
              margin: 0,
              transform: "translateX(40px)", // move right
              marginTop: "2px",
            }}
          >
            Tk
          </p>
        </Box>
      </Stack>

      <Stack flexDirection="column" gap="16px" mb={2}>
        <Stack flexDirection="row">
          <ArrowPointer size="24px" />
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 2 }}
          >
            <Typography variant="body" fontWeight={700}>
              Optical Fiber Connection
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row">
          <ArrowPointer size="24px" />
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 2 }}
          >
            <Typography variant="body" fontWeight={700}>
              Bufferless Connection
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row">
          <ArrowPointer size="24px" />
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 2 }}
          >
            <Typography variant="body" fontWeight={700}>
              Superfast BDIX speed
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row">
          <ArrowPointer size="24px" />
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ ml: 2 }}
          >
            <Typography variant="body" fontWeight={700}>
              24/7 Support
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
