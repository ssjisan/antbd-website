import { Box, Container, Stack, Typography } from "@mui/material";
import SilverJubilee from "../../assets/SilverJubilee";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/Dotted.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Container>
        <Stack sx={{ pt: "140px" }} justifyContent="center" alignItems="center">
          <Stack
            gap="16px"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", maxWidth: "780px" }}
          >
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              Connecting People for 25 Years.{" "}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "text.secondary", textAlign: "center" }}
            >
              Thank you for trusting us to keep you connected. From dial-up
              dreams to fiber-fast futures, we&apos;ve grown together.
              Here&apos;s to 25 more years of innovation and reliability.
            </Typography>
          </Stack>
          <SilverJubilee />
        </Stack>
      </Container>
    </Box>
  );
}
