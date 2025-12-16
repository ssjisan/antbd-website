import { Stack, Typography } from "@mui/material";

export default function CoverageAreaHeader() {
  return (
    <Stack gap={1} sx={{ width: "100%" }} alignItems="center">
      <Typography variant="h3">Check Coverage in your area</Typography>
      <Typography variant="h6" color="text.secondary">
        In easy 3 steps & get connected in minutes!
      </Typography>
    </Stack>
  );
}
