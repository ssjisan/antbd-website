import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Company from "./Company";
import OtherLinks from "./OtherLinks";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import Location from "./Location";

export default function Footer() {
  const forBelow767 = useMediaQuery("(max-width:767px)");

  const forBelow599 = useMediaQuery("(max-width:599px)");

  const FooterContainerSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const BottomSx = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: forBelow599 && "column",
    background: "#031E210A",
    gap: "24px",
    p: "16px",
    borderRadius: "16px",
  };
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={FooterContainerSx}>
      <Container
        sx={{
          pt: forBelow767 ? "40px" : "80px",
          pb: "32px",
          borderTop: "1px solid  rgba(145,158,171,0.32)",
        }}
      >
        <Box sx={{ p: "24px 0px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} lg={12}>
              <Box sx={{ width: "100%", maxWidth: "280px" }}>
                <img src="/amar_internet_antbd.png" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <Company />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <OtherLinks />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Contacts />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Location />
            </Grid>
          </Grid>
        </Box>
        <Box sx={BottomSx}>
          <Typography variant="body1">
            © {currentYear} All Rights Reserved to Antaranga Dot Com Limited.
          </Typography>
          <Typography variant="body1">
            Powered By{" "}
            <Box component="span" sx={{ textDecoration: "underline" }}>
              <Link
                to="https://codesenate.com"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                CodeSenate
              </Link>
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
