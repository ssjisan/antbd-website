import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animation1 from "../../assets/incoming call.json";
import animation2 from "../../assets/messenger.json";
import animation3 from "../../assets/Chat.json";

export default function NeedHelp() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Need help?
      </Typography>

      <Grid container spacing={3}>
        {/* 1️⃣ PHONE SUPPORT */}
        <Grid item xs={12} sm={12} md={4}>
          <Stack gap="36px" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                width: "150px",
                height: "150px",
                border: "1px solid #00000014",
                boxShadow: "0px 0.86px 52.13px -8.57px #00000024",
                p: "16px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Lottie
                animationData={animation1}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>

            <Stack gap="12px" justifyContent="center" sx={{ textAlign: "center" }}>
              <Typography variant="h4">Need help getting connected?</Typography>
              <Typography variant="h6" color="text.secondary">
                Call us at{" "}
                <Box
                  component="a"
                  href="tel:09666121131"
                  sx={{
                    textDecoration: "underline",
                    color: "#008641",
                    fontWeight: 600,
                  }}
                >
                  09666 121 131
                </Box>
                <br />
                for instant assistance.
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* 2️⃣ FACEBOOK MESSENGER */}
        <Grid item xs={12} sm={12} md={4}>
          <Stack gap="36px" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                width: "150px",
                height: "150px",
                border: "1px solid #00000014",
                boxShadow: "0px 0.86px 52.13px -8.57px #00000024",
                p: "16px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Lottie
                animationData={animation2}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>

            <Stack gap="12px" justifyContent="center" sx={{ textAlign: "center" }}>
              <Typography variant="h4">Prefer live chat support?</Typography>
              <Typography variant="h6" color="text.secondary">
                Chat with us on{" "}
                <Box
                  component="a"
                  href="https://m.me/AntarangaDotCom"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: "underline",
                    color: "#008641",
                    fontWeight: 600,
                  }}
                >
                  Facebook Messenger
                </Box>
                <br />
                for quick help.
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* 3️⃣ WEBSITE CHAT BOX */}
        <Grid item xs={12} sm={12} md={4}>
          <Stack gap="36px" justifyContent="center" alignItems="center">
            <Stack
              sx={{
                width: "150px",
                height: "150px",
                border: "1px solid #00000014",
                boxShadow: "0px 0.86px 52.13px -8.57px #00000024",
                p: "16px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Lottie
                animationData={animation3}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>

            <Stack gap="12px" justifyContent="center" sx={{ textAlign: "center" }}>
              <Typography variant="h4">Looking for more answers?</Typography>
              <Typography variant="h6" color="text.secondary">
                Use the chat box in the bottom-left corner <br />
                to talk with us.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
