import { Autocomplete, Stack, TextField, Container } from "@mui/material";
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

export default function Area() {
  const [district, setDistrict] = useState(null);
  const [policeStation, setPoliceStation] = useState(null);

  return (
    <Container
      sx={{
        pt: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack gap="16px" sx={{ width: { xs: "100%", sm: "60%", md: "40%" } }}>
        <Autocomplete
          options={districts}
          value={district}
          onChange={(event, newValue) => {
            setDistrict(newValue);
            setPoliceStation(null);
          }}
          renderInput={(params) => <TextField {...params} label="District" />}
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
      </Stack>
    </Container>
  );
}
