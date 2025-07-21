import { Container, Stack, Typography, TextField } from "@mui/material";

export default function Details() {
  return (
    <Container
      sx={{
        pt: "48px",
        display: "flex",
        justifyContent: "center", // center horizontally
      }}
    >
      {" "}
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
         <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Mobile" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth type="email" />
          <TextField label="Zone" variant="outlined" fullWidth />
          <TextField label="Area" variant="outlined" fullWidth />
          <TextField
            label="Full Address"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
      </Stack>
    </Container>
  );
}
