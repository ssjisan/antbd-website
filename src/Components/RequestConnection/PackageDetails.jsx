import { Box } from "@mui/material";
import PackageCard from "../Common/PackageCard";

export default function PackageDetails({ pkg, onClose }) {
    if (!pkg) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "rgba(0,0,0,0.5)",
        zIndex: 1300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
      onClick={onClose}
    >
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
          ×
        </Box>

        <PackageCard pkg={pkg} />
      </Box>
    </Box>
  )
}
