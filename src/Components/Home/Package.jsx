import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import packagesFake from "../../assets/packagesFake.json"; // adjust path as needed
import PackageCard from "../Common/PackageCard";

export default function Package() {
  const famousPackages = packagesFake.filter((pkg) => pkg.showAsFamous);

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Choose your broadband package
      </Typography>

      <Grid container spacing={3}>
        {famousPackages.map((pkg) => (
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

      {/* Bottom Note */}
      <Stack sx={{ mt: "64px", width: "100%" }} gap="16px" alignItems="center">
        <Typography color="text.secondary">
          Bill for 12 months and get a solid 10% discount with free fiber
          connection
        </Typography>
        <Button variant="outlined" sx={{ width: "100%", maxWidth: "240px" }}>
          See all packages
        </Button>
      </Stack>
    </Container>
  );
}
