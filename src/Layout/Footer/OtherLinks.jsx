import { Stack, Typography } from "@mui/material";
// import { LocationBasic } from "../../assets/Icons";

export default function OtherLinks() {
  return (
    <Stack gap="24px">
      <Typography variant="h6">Useful links</Typography>
      <Stack gap="8px" flexDirection="column">
        <Typography color="text.secondary">Pay bill</Typography>
        <Typography color="text.secondary">My Account</Typography>
        <Typography color="text.secondary">Request a connection</Typography>
      </Stack>
    </Stack>
  );
}
