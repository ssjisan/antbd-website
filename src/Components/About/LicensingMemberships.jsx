import { Container, Grid, Stack, Typography } from "@mui/material";

const logoList = [
  { src: "ispba.png", alt: "ISPBA" },
  { src: "btrc.png", alt: "BTRC" },
  { src: "bcs.png", alt: "BCS" },
  { src: "apnic.jpg", alt: "APNIC" },
  { src: "bdix.png", alt: "bdix" },
  { src: "cstf.jpg", alt: "jpg" },
];

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
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100px",
                  objectFit: "contain",
                }}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
