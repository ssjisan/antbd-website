import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import FaQAccordion from "../Common/FaQAccordion";
import { Contact } from "../../Assets/Contact";
export default function FaQ() {
  const forBelow999 = useMediaQuery("(max-width:999px)");
  const ContainerSx = {
    paddingTop: forBelow999 ? "40px" : "64px",
    paddingBottom: forBelow999 ? "40px" : "64px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  };
  const HeaderSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    alignSelf: "stretch",
  };
  const FqAContainerSx = {
    justifyContent: "center",
  };
  return (
    <Container sx={ContainerSx}>
      <Box sx={HeaderSx}>
        <Typography variant="h2">Our Story in Questions</Typography>
      </Box>
      <Grid container sx={FqAContainerSx}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <FaQAccordion questions={Contact} />
        </Grid>
      </Grid>
    </Container>
  );
}
