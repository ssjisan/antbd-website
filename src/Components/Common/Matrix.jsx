import { Container, Grid, Stack, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Matrix() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Start animation when 30% visible
  });

  return (
    <Container ref={ref}>
      <Grid container rowSpacing={3} columnSpacing={4}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Stack gap="0px" sx={{ textAlign: "center" }} justifyContent="center">
            <Typography variant="h2" sx={{ fontWeight: "900 !important" }}>
              {inView ? (
                <CountUp end={32} duration={2} separator="," suffix="k+" />
              ) : (
                "0"
              )}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              happy customer
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Stack gap="0px" sx={{ textAlign: "center" }} justifyContent="center">
            <Typography variant="h2" sx={{ fontWeight: "900 !important" }}>
              {inView ? <CountUp end={20} duration={2} suffix="+" /> : "0"}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              years and counting!
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Stack gap="0px" sx={{ textAlign: "center" }} justifyContent="center">
            <Typography variant="h2" sx={{ fontWeight: "900 !important" }}>
              {inView ? <CountUp end={32} duration={2} suffix="+" /> : "0"}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              locations
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Stack gap="0px" sx={{ textAlign: "center" }} justifyContent="center">
            <Typography variant="h2" sx={{ fontWeight: "900 !important" }}>
              {inView ? <CountUp end={300} duration={2} suffix="+" /> : "0"}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              employee
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
