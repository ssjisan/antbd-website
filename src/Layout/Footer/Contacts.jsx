import { Stack, Typography } from "@mui/material";
import { Email, Hotline, Phone } from "../../assets/Icons/Footer/Icons";
// import { LocationBasic } from "../../assets/Icons";

export default function Contacts() {
  return (
    <Stack gap="24px">
      <Typography variant="h6">Contacts</Typography>
      <Stack gap="16px" flexDirection="column">
        <Stack>
          <Stack gap="8px" flexDirection="row">
            <Stack>
              <Hotline size="20px" color="#000" />
            </Stack>
            <Typography fontWeight="700">Hotline</Typography>
          </Stack>
          <Typography color="text.secondary"> 09666-121-131</Typography>
        </Stack>
        <Stack>
          <Stack gap="8px" flexDirection="row">
            <Stack>
              <Phone size="20px" color="#000" />
            </Stack>
            <Typography fontWeight="700">Phone</Typography>
          </Stack>
          <Typography color="text.secondary"> 01711-669900</Typography>
        </Stack>
        <Stack>
          <Stack gap="8px" flexDirection="row">
            <Stack>
              <Email size="20px" color="#000" />
            </Stack>
            <Typography fontWeight="700">Email</Typography>
          </Stack>
          <Typography color="text.secondary"> info@antbd.com</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
