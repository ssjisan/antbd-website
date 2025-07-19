import { Container, Box, Button } from "@mui/material";
import Area from "./Area";
import RequestStepper from "./RequestStepper";
import AvailablePackages from "./AvailablePackages";
import Details from "./Details";

export default function RequestConnectionBody() {
  return (
    <>
      <Container sx={{ pt: "64px", pb: "96px" }}>
        <RequestStepper />
        <Box>
          Awesome! Antaranga Dot Com Limited is ready to serve you in your area.
          You searched for: <strong>District - Barguna, Area - Amtali</strong>
        </Box>
        <Area />
        <AvailablePackages />
        <Details />
      </Container>

      {/* Fixed bottom button bar */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          p: "16px",
          bgcolor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          zIndex: 1300,
        }}
      >
        <Container>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}
          >
            <Button color="inherit" variant="soft">
              Back
            </Button>
            <Button variant="contained" sx={{ width: "240px" }}>
              Place Order
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
