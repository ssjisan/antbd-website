import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import errorAnimation from "../../assets/404.json"; // Replace with your actual 404 animation path
import { Button, Stack, Typography } from "@mui/material";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Lottie
        animationData={errorAnimation}
        loop
        style={{ width: 300, height: 300, marginBottom: 20 }}
      />
      <Stack gap="40px" sx={{width:"100%", maxWidth:"560px"}} alignItems="center">
        <Stack gap="16px">
        <Typography variant="h2">Oops, are you lost?</Typography>
        <Typography variant="h6" color="text.secondary">
          We couldn’t find the page you’re looking for. It might have been
          moved, renamed, or doesn’t exist anymore.
        </Typography>
      </Stack>
      <Button onClick={() => navigate("/")} variant="contained" sx={{width:"fit-content"}}>
        Go Home
      </Button>
      </Stack>
    </div>
  );
}
