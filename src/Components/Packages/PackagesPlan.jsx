import { Container, Grid, Stack, Typography } from "@mui/material";
import packagesFake from "../../assets/packagesFake.json"; // adjust path as needed
import PackageCard from "../Common/PackageCard";

export default function PackagesPlan() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Stack
        gap="16px"
        sx={{
          mb: "40px",
          maxWidth: "456px",
          mx: "auto", // 🔥 centers the Stack horizontally
          textAlign: "center",
        }}
        alignItems="center"
      >
        <Typography variant="h3">Find Your Perfect Plan</Typography>
        <Typography color="text.secondary" variant="h6">
          Discover the ideal plan to fuel your business growth. Our pricing
          options are carefully crafted to cater to businesses.
        </Typography>
      </Stack>

      <Grid container rowSpacing={6} columnSpacing={3}>
        {packagesFake.map((pkg) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            key={pkg.title}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PackageCard pkg={pkg} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
