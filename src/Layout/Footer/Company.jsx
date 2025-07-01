import { Stack, Typography } from "@mui/material";

export default function Company() {
  return (
    <Stack gap="24px">
      <Typography variant="h6">Company</Typography>
      <Stack gap="8px" flexDirection="column">
        <Typography color="text.secondary">About</Typography>
        <Typography color="text.secondary">Contact Us</Typography>
        <Typography color="text.secondary">Coverage Area</Typography>
        <Typography color="text.secondary">Help & Support</Typography>
        <Typography color="text.secondary">Packages</Typography>
      </Stack>
    </Stack>
  );
}
