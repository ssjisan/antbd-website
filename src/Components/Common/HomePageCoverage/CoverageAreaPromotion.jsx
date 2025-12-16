import { Stack, Typography } from "@mui/material";
import { ArrowDown } from "../../../assets/Icons/Common/Icons";

export default function CoverageAreaPromotion() {
  return (
    <Stack
      sx={{
        marginTop: "24px",
        width: "100%",
        border: "1px solid #ccc",
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
              background: "#fff0efff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <ArrowDown size="20px" color="#aa4a44" />
          </Stack>
          <Typography>Fiber-optic connection</Typography>
        </Stack>
        <Stack alignItems="center" direction="row" gap="12px">
          <Stack
            sx={{
              width: "32px",
              height: "32px",
              background: "#fff0efff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <ArrowDown size="20px" color="#aa4a44" />
          </Stack>
          <Typography>Fiber-optic connection</Typography>
        </Stack>
        <Stack alignItems="center" direction="row" gap="12px">
          <Stack
            sx={{
              width: "32px",
              height: "32px",
              background: "#fff0efff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <ArrowDown size="20px" color="#aa4a44" />
          </Stack>
          <Typography>Fiber-optic connection</Typography>
        </Stack>
        <Stack alignItems="center" direction="row" gap="12px">
          <Stack
            sx={{
              width: "32px",
              height: "32px",
              background: "#fff0efff",
              borderRadius: "8px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <ArrowDown size="20px" color="#aa4a44" />
          </Stack>
          <Typography>Fiber-optic connection</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
