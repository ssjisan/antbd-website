import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import PackageCard from "../Common/PackageCard";
import { Link } from "react-router-dom";

export default function Package() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadPackages = async () => {
    try {
      const res = await axios.get("/popup-packages");

      console.log("Response from /popup-packages:", res.data);

      if (Array.isArray(res.data)) {
        setPackages(res.data);
      } else {
        console.error("Expected array but got:", res.data);
        setPackages([]);
      }
    } catch (error) {
      console.error("Error loading popup packages:", error);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPackages();
  }, []);

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Choose your broadband package
      </Typography>

      {loading ? (
        <Stack alignItems="center" justifyContent="center" sx={{ mt: 6 }}>
          <CircularProgress />
        </Stack>
      ) : (
        <Grid container spacing={3}>
          {packages.map((pkg) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={pkg._id || pkg.packageName}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <PackageCard pkg={pkg} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Bottom Note */}
      <Stack sx={{ mt: "64px", width: "100%" }} gap="16px" alignItems="center">
        <Typography color="text.secondary">
          Bill for 12 months and get a solid 10% discount with free fiber
          connection
        </Typography>
        <Button
          variant="outlined"
          sx={{ width: "100%", maxWidth: "240px" }}
          onClick={goToTop}
          component={Link}
          to="/package"
        >
          See all packages
        </Button>
      </Stack>
    </Container>
  );
}
