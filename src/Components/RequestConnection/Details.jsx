import { Container, Stack, Typography, TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Details() {
  const { formData, setFormData, area } = useContext(DataContext);

  useEffect(() => {
    if (area) {
      let updatedData = { ...formData };

      if (area.areaName && formData.area !== area.areaName) {
        updatedData.area = area.areaName;
      }

      if (area.zoneName && formData.zone !== area.zoneName) {
        updatedData.zone = area.zoneName;
      }

      // Only update if something changed
      if (
        updatedData.area !== formData.area ||
        updatedData.zone !== formData.zone
      ) {
        setFormData(updatedData);
      }
    }
  }, [area]);

  // Handles each field update
  const updateField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          p: "24px",
          border: "1.5px solid #918EAF3D",
          borderRadius: "16px",
          width: {
            xs: "100%",
            sm: "100%",
            md: "60%",
            lg: "60%",
          },
        }}
        flexDirection="column"
        gap="24px"
      >
        <Typography variant="h5">Contact information</Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
        <TextField
          label="Mobile"
          variant="outlined"
          fullWidth
          value={formData.mobile}
          onChange={(e) => updateField("mobile", e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
        <TextField
          label="Zone"
          variant="outlined"
          fullWidth
          disabled
          value={formData.zone}
          onChange={(e) => updateField("zone", e.target.value)}
        />
        <TextField
          label="Area"
          variant="outlined"
          fullWidth
          disabled
          value={formData.area}
        />
        <TextField
          label="Full Address"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={formData.fullAddress}
          onChange={(e) => updateField("fullAddress", e.target.value)}
        />
      </Stack>
    </Container>
  );
}
