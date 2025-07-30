import { Container, Grid, Stack, Typography, Skeleton } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const logoList = [
  {
    src: "https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753901031/website/section-images/Partners/ispba_grzf6y.png",
    alt: "ISPBA",
  },
  {
    src: "https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753901034/website/section-images/Partners/btrc_znxhnt.png",
    alt: "BTRC",
  },
  {
    src: "https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753901032/website/section-images/Partners/bcs_him8ia.png",
    alt: "BCS",
  },
  {
    src: "https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753901031/website/section-images/Partners/apnic_nhjvac.jpg",
    alt: "APNIC",
  },
  {
    src: "https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753901032/website/section-images/Partners/bdix_cfv8o0.png",
    alt: "bdix",
  },
  {
    src: "https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753901033/website/section-images/Partners/cstf_y1wv1k.jpg",
    alt: "jpg",
  },
];

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
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Certified Partnerships, Licenses, and Memberships
      </Typography>

      <Grid container spacing={3}>
        {logoList.map((logo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
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
              <LogoWithSkeleton src={logo.src} alt={logo.alt} />
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
