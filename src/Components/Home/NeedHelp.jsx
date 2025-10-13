import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const HelpCard = ({ imageSrc, title, children }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Stack gap="36px" justifyContent="center" alignItems="center">
      <Stack
        sx={{
          width: "100px",
          height: "100px",
          border: "1px solid #00000014",
          boxShadow: "0px 0.86px 52.13px -8.57px #00000024",
          p: "32px 0px",
          borderRadius: "8px",
          overflow:"hidden"
        }}
        justifyContent="center"
        alignItems="center"
      >
        {!imgLoaded && <Skeleton variant="circular" width={100} height={100} />}
        <img
          src={imageSrc}
          alt={title}
          width="100%"
          style={{ display: imgLoaded ? "block" : "none" }}
          onLoad={() => setImgLoaded(true)}
        />
      </Stack>

      <Stack gap="12px" justifyContent="center" sx={{ textAlign: "center" }}>
        <Typography variant="h4">{title}</Typography>
        {children}
      </Stack>
    </Stack>
  );
};

export default function NeedHelp() {
  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Need help?
      </Typography>
      <Grid container spacing={3}>
        {/* 1️⃣ PHONE SUPPORT */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <HelpCard
            imageSrc="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1760381316/website/section-images/n1_n5q65q.jpg"
            title="Need help getting connected?"
          >
            <Typography variant="h6" color="text.secondary">
              Call us at {" "}
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
          </HelpCard>
        </Grid>

        {/* 2️⃣ FACEBOOK MESSENGER */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <HelpCard
            imageSrc="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1760382312/website/section-images/n2_acoi9g.png"
            title="Prefer live chat support?"
          >
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
          </HelpCard>
        </Grid>

        {/* 3️⃣ WEBSITE CHAT BOX */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <HelpCard
            imageSrc="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1760382264/website/section-images/n3_ngaju5.png"
            title="Looking for more answers?"
          >
            <Typography variant="h6" color="text.secondary">
              Use the chat box
              in the bottom-left corner <br />
              to talk with us.
            </Typography>
          </HelpCard>
        </Grid>
      </Grid>
    </Container>
  );
}
