import { Stack } from "@mui/material";

export default function CoverageAreaSteps() {
  return (
    <Stack
      sx={{
        border: "1px solid red",
        padding: "12px",
        maxWidth: "75%",
        width: "100%",
      }}
    >
      <Stack sx={{ background: "#000", padding: "2px" }}></Stack>
    </Stack>
  );
}
