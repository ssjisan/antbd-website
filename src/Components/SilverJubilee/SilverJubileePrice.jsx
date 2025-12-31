import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { DataContext } from "../../DataProcessing/DataContext";
import { useContext } from "react";
import SilverJubileePackageCard from "../Common/SilverJubileePackageCard";

export default function SilverJubileePrice() {
  const { specialPackages, loading } = useContext(DataContext);
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
    <Container sx={{ p: "64px 0px" }}>
      <Stack justifyContent="center" alignItems="center">
        <Stack
          gap="8px"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", maxWidth: "780px" }}
        >
          <Typography variant="h3">One Plan. Everything You Need.</Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            A premium package designed for all our valued clients.
          </Typography>
        </Stack>
      </Stack>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={3}
        justifyContent="center"
        mt={5}
      >
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
        ) : specialPackages.length > 0 ? (
          specialPackages.map((pkg) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={pkg._id} // 🔄 changed from title to _id
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <SilverJubileePackageCard pkg={pkg} />
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
