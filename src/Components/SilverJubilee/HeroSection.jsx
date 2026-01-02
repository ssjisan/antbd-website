import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SilverJubilee from "../../assets/SilverJubilee";

export default function HeroSection() {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  return (
    <Box
      sx={{
        minHeight: forBelow767 ? "65vh" : "100vh",
        backgroundImage: "url('/Dotted.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        paddingBottom: "64px",
        overflow: "visible",
      }}
    >
      <Container>
        <Stack sx={{ pt: "1%" }} justifyContent="center" alignItems="center">
          <SilverJubilee />
          <Stack
            gap="16px"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", maxWidth: "780px" }}
          >
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              Connecting Bangladesh for 25 years.{" "}
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
        </Stack>
      </Container>
    </Box>
  );
}
