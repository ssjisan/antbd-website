import { Container, Grid, Stack, Typography, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";

// Image with skeleton wrapper
const LogoWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Skeleton variant="rectangular" width="100%" height={100} />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
          maxWidth: "100%",
          maxHeight: "100px",
          objectFit: "contain",
        }}
      />
    </>
  );
};

export default function LicensingMemberships() {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const res = await axios.get("/memberships");
        setMemberships(res.data || []);
      } catch (err) {
        toast.error("Failed to load memberships", err);
      }
    };

    fetchMemberships();
  }, []);

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Certified Partnerships, Licenses, and Memberships
      </Typography>

      <Grid container spacing={3}>
        {memberships.map((membership) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={membership._id}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 4,
                p: 3,
                height: "100%",
              }}
            >
              <LogoWithSkeleton
                src={membership.image?.url}
                alt={membership.name}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

LogoWithSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
