import { useContext } from "react";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Skeleton,
  Box,
} from "@mui/material";
import PackageCard from "../Common/PackageCard";
import { DataContext } from "../../DataProcessing/DataContext";

export default function PackagesPlan() {
  const { packages, loading } = useContext(DataContext);

  // Skeleton card component for loading state
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

      <Grid container rowSpacing={6} columnSpacing={3} justifyContent="center">
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
          <Typography variant="body1" sx={{ mt: "48px" }}>
            No packages found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
