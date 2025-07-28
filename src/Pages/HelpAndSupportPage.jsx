import { Container, Typography, Button } from "@mui/material";
import Navbar from "../Layout/Navbar/Navbar";
import Lottie from "lottie-react";
import errorAnimation from "../assets/Website building.json"; // Replace with your actual 404 animation path

export default function HelpAndSupportPage() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: 8,
        }}
      >
        <Lottie
        animationData={errorAnimation}
        loop
        style={{ width: 300, height: 300, marginBottom: 0 }}
      />

        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Help & Support
        </Typography>

        <Typography variant="h4" color="text.secondary" sx={{ mb: 3,fontWeight:"500 !important" }}>
          We’re building a better self-care support experience for you.
        </Typography>

        <Typography variant="h6" sx={{ mb: 4, maxWidth: 560 }}>
          Our self-service support center is under construction. Meanwhile, if
          you have any questions or need assistance, please don’t hesitate to
          call us.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          href="tel:09666121131"
          sx={{ borderRadius: 2, px: 4 }}
        >
          Call Us: 09666 121 131
        </Button>
      </Container>
    </>
  );
}
