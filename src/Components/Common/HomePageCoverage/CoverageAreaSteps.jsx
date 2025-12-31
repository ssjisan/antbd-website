import { Stack, Typography } from "@mui/material";
import { Search, Submit, Wifi } from "../../../assets/Icons/Common/Icons";

export default function CoverageAreaSteps() {
  return (
    <Stack
      sx={{
        padding: "32px",
        maxWidth: "720px",
        width: "100%",
      }}
      direction="row"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      <Stack
        sx={{ padding: "2px", width: "fit-content" }}
        justifyContent="center"
        alignItems="center"
        gap="8px"
      >
        <Stack
          sx={{
            width: "48px",
            height: "48px",
            borderRadius: "100%",
            background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
          }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Search size="20px" color="#fff" />
        </Stack>
        <Stack
          sx={{
            fontSize: "12px",
            padding: "2px 12px",
            borderRadius: "20px",
            background: "#e8eeffff",
            color: "#1D4ED8",
            fontWeight: 600,
          }}
        >
          Step 1
        </Stack>
        <Typography fontWeight={700}>Search area</Typography>
      </Stack>
      <Stack
        sx={{ padding: "2px", width: "fit-content" }}
        justifyContent="center"
        alignItems="center"
        gap="8px"
      >
        <Stack
          sx={{
            width: "48px",
            height: "48px",
            borderRadius: "100%",
            background: "linear-gradient(135deg, #A855F7, #DB2777)",
          }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Wifi size="24px" color="#fff" />
        </Stack>
        <Stack
          sx={{
            fontSize: "12px",
            padding: "2px 12px",
            borderRadius: "20px",
            background: "#f2e4ffff",
            color: "#A855F7",
            fontWeight: 600,
          }}
        >
          Step 2
        </Stack>
        <Typography fontWeight={700}>Check availability</Typography>
      </Stack>
      <Stack
        sx={{ padding: "2px", width: "fit-content" }}
        justifyContent="center"
        alignItems="center"
        gap="8px"
      >
        <Stack
          sx={{
            width: "48px",
            height: "48px",
            borderRadius: "100%",
            background: "linear-gradient(135deg, #4ADE80, #16A34A)",
          }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Submit size="20px" color="#fff" />
        </Stack>
        <Stack
          sx={{
            fontSize: "12px",
            padding: "2px 12px",
            borderRadius: "20px",
            background: "#dcffe9ff",
            color: "#4ADE80",
            fontWeight: 600,
          }}
        >
          Step 3
        </Stack>
        <Typography fontWeight={700}>Submit order</Typography>
      </Stack>
    </Stack>
  );
}
