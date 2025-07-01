import { Stack, Typography } from "@mui/material";
import { LocationPin } from "../../assets/Icons/Footer/Icons";
// import { LocationBasic } from "../../assets/Icons";

export default function Location() {
  return (
    <Stack gap="24px">
      <Typography variant="h6">Contacts</Typography>
      <Stack gap="16px" flexDirection="column">
        <Stack>
          <Stack gap="8px" flexDirection="row">
            <Stack>
              <LocationPin size="20px" color="#000" />
            </Stack>
            <Typography fontWeight="700">Corporate Office - Dhaka</Typography>
          </Stack>
          <Typography color="text.secondary">
            24/1, Shan Tower(3rd floor), Shantinagar More, Polton, Dhaka- 1217,
            Dhaka
          </Typography>
        </Stack>
        <Stack>
          <Stack gap="8px" flexDirection="row">
            <Stack>
              <LocationPin size="20px" color="#000" />
            </Stack>
            <Typography fontWeight="700">
              Corporate Office -Chattogram
            </Typography>
          </Stack>
          <Typography color="text.secondary">
            Tower- 71 (23rd floor), Agrabad C/A, Chattogram
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
