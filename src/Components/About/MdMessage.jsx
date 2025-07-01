import { Grid, Container, Typography, Stack, Box } from "@mui/material";

export default function MdMessage() {
  return (
    <Container sx={{ py: 8, position: "relative" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Responsive SVG Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 560,
              mx: "auto",
              height: "610px",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              alt="Sujon"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Stack
            sx={{ pl: { md: "64px" }, mt: { xs: "32px", md: "0" } }}
            gap="24px"
          >
            <Typography variant="h2">
              Run your Internet In Safest Way
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Our mission is to better the future with industry-leading
              Internet, Mobile, Television, Satellite and Business connectivity
              solutions.
              <br />
              The world as we know is no longer the same, and changes now occur
              in days and months, not years. The digital revolution is here, and
              Winden is at the center, supporting entrepreneurs and businesses
              propelling the growth of the global internet economy.
            </Typography>
            <Stack gap="4px" sx={{ mt: "40px" }}>
              <Typography variant="h4">Asadujjaman Sujon</Typography>
              <Typography variant="h5" color="text.secondary">
                Managing Director
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
