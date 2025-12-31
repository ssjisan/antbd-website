import { Box, Container, Stack, Typography, Skeleton } from "@mui/material";
import Matrix from "../Common/Matrix";
import { useState } from "react";

export default function Herosection() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Container sx={{ p: "64px 16px" }}>
      <Stack gap="64px" sx={{ textAlign: "center" }} alignItems="center">
        <Typography variant="h2" sx={{ width: "100%", maxWidth: "780px" }}>
          Leading Name in The Bangladesh Broadband Internet Service Providers
        </Typography>
        <Box
          sx={{
            borderRadius: "40px",
            overflow: "hidden",
            width: "100%",
            height: "420px",
            position: "relative",
          }}
        >
          {/* Show Skeleton until image is loaded */}
          {!imgLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{ borderRadius: "40px" }}
            />
          )}

          <img
            src="https://api.antbd.com/file-storage/aboutus.jpg"
            alt="bg"
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              display: imgLoaded ? "block" : "none",
            }}
            onLoad={() => setImgLoaded(true)}
          />
          <img
            src="antbd.png"
            alt="Overlay Icon"
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              width: "24px",
              height: "24px",
              opacity: 1,
              pointerEvents: "none",
            }}
          />
        </Box>
        <Matrix />
        <Typography variant="h4" sx={{ width: "100%", fontWeight: 500 }}>
          <Box component="span" sx={{ color: "text.primary" }}>
            Since 2001, we have been the leading name in the Bangladesh
            broadband internet service providers community.For 22 years, we have
            been pursuing our goal towards a better and optimized internet
            service provider all around Bangladesh.
          </Box>{" "}
          <Box component="span" sx={{ color: "text.secondary" }}>
            In this process, we have already gained a lot of trust and love from
            many people in Dhaka.Now, we are setting up outside of Dhaka to give
            the whole country a refined taste of real internet and speed.
          </Box>
        </Typography>
      </Stack>
    </Container>
  );
}
