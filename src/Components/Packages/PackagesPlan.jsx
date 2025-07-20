import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Stack, Typography } from "@mui/material";
import PackageCard from "../Common/PackageCard";

export default function PackagesPlan() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true); // optional: for showing loader

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get("/all-packages"); // ✅ Update if full path needed
        setPackages(res.data.packages || []);
      } catch (error) {
        console.error("Failed to load packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Stack
        gap="16px"
        sx={{
          mb: "40px",
          maxWidth: "456px",
          mx: "auto",
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
        {loading ? (
          <Typography variant="body1" sx={{ mx: "auto" }}>
            Loading...
          </Typography>
        ) : packages.length > 0 ? (
          packages.map((pkg) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={pkg._id} // 🔄 changed from title to _id
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <PackageCard pkg={pkg} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ mx: "auto" }}>
            No packages found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
