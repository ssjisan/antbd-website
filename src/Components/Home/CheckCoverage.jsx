import {
  Box,
  Button,
  Stack,
  Container,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import CoverageAnimation from "../Common/CoverageAnimation";
import { useState } from "react";

// Dummy Data
const districts = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Sylhet",
  "Rangpur",
];

const policeStationsByDistrict = {
  Dhaka: ["Dhanmondi", "Mirpur", "Gulshan"],
  Chattogram: ["Pahartali", "Kotwali", "Panchlaish"],
  Rajshahi: ["Boalia", "Rajpara", "Motihar"],
  Khulna: ["Khalishpur", "Daulatpur", "Sonadanga"],
  Barisal: ["Kotwali", "Airport", "Bakerganj"],
  Sylhet: ["Kotwali", "Airport", "Beanibazar"],
  Rangpur: ["Kotwali", "Gangachara", "Pirganj"],
};

export default function CheckCoverage() {
  const [district, setDistrict] = useState(null);
  const [policeStation, setPoliceStation] = useState(null);

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          borderRadius: "32px",
          overflow: "hidden",
        }}
      >
        {/* Form Card */}
        <Stack
          sx={{
            p: 4,
            width: { xs: "100%", sm: "100%", md: "64%" },
          }}
          gap="64px"
        >
          <Stack gap="4px">
            <Typography variant="h3">Check Coverage</Typography>
            <Typography variant="h6" color="text.secondary">
              Find out if we’re available in your area today.
            </Typography>
          </Stack>

          <Stack gap={"16px"}>
            {/* District Autocomplete */}
            <Autocomplete
              options={districts}
              value={district}
              onChange={(event, newValue) => {
                setDistrict(newValue);
                setPoliceStation(null); // reset police station on district change
              }}
              renderInput={(params) => (
                <TextField {...params} label="District" />
              )}
              fullWidth
            />

            {/* Police Station Autocomplete */}
            <Autocomplete
              disabled={!district}
              options={policeStationsByDistrict[district] || []}
              value={policeStation}
              onChange={(event, newValue) => {
                setPoliceStation(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Police Station" />
              )}
              fullWidth
            />

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{ width: "100%", maxWidth: "140px" }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>

        {/* Animation */}
        <CoverageAnimation />
      </Box>
    </Container>
  );
}
