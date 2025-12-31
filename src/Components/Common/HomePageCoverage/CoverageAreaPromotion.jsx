import { Stack, Typography } from "@mui/material";
import {
  Flash,
  PriceTag,
  Support,
  UpTime,
} from "../../../assets/Icons/Common/Icons";

export default function CoverageAreaPromotion() {
  return (
    <Stack
      sx={{
        marginTop: "24px",
        width: "100%",
        border: "1px solid #eaeaeaff",
        padding: "16px",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h5" fontWeight={700}>
        What you get?
      </Typography>
      <Stack sx={{ marginTop: "20px" }} gap="16px">
        <Stack alignItems="center" direction="row" gap="12px">
          <Stack
            sx={{
              width: "32px",
              height: "32px",
              background: "#ffe6e7ff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Flash size="20px" color="#EF1115" />
          </Stack>
          <Typography>Fiber-optic connection</Typography>
        </Stack>
        <Stack alignItems="center" direction="row" gap="12px">
          <Stack
            sx={{
              width: "32px",
              height: "32px",
              background: "#dffff4ff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <UpTime size="20px" color="#059669" />
          </Stack>
          <Typography>99.9% uptime reliability</Typography>
        </Stack>
        <Stack alignItems="center" direction="row" gap="12px">
          <Stack
            sx={{
              width: "32px",
              height: "32px",
              background: "#e6eeffff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Support size="20px" color="#3876FF" />
          </Stack>
          <Typography>24/7 expert support</Typography>
        </Stack>
        <Stack alignItems="center" direction="row" gap="12px">
          <Stack
            sx={{
              width: "32px",
              height: "32px",
              background: "#f4eeffff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <PriceTag size="20px" color="#7C3AED" />
          </Stack>
          <Typography>Trasnparent pricing, no surprise</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
