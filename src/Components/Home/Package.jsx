import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Skeleton,
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

  const PackageCardSkeleton = () => (
    <Box
      sx={{
        width: 320,
        borderRadius: 2,
        p: 2,
        bgcolor: "background.paper",
      }}
    >
      <Skeleton variant="text" height={20} width="20%" />
      <Skeleton variant="text" height={24} width="40%" />
      <Skeleton variant="text" height={32} width="60%" />
      <Skeleton
        variant="rectangular"
        height={140}
        sx={{ borderRadius: 1, my: 2 }}
      />
      <Skeleton variant="text" height={20} width="20%" />
      <Skeleton variant="text" height={24} width="40%" />
      <Skeleton variant="text" height={32} width="60%" />
      <Skeleton
        variant="rectangular"
        height={36}
        width={"100%"}
        sx={{ mt: 3, borderRadius: 1 }}
      />
    </Box>
  );

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Choose your broadband package
      </Typography>

      {loading ? (
        Array.from(new Array(3)).map((_, idx) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            key={idx}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PackageCardSkeleton />
          </Grid>
        ))
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
