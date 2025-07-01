import { Box, Container, Stack, Typography } from "@mui/material";
import Matrix from "../Common/Matrix";

export default function Herosection() {
  return (
    <Container sx={{ p: "64px 16px" }}>
      <Stack gap="64px" sx={{ textAlign: "center" }} alignItems="center">
        <Typography variant="h2" sx={{ width: "100%", maxWidth: "780px" }}>
          Leading Name in The Bangladesh Broadband Internet Service Providers
        </Typography>
        <Box sx={{ borderRadius: "40px", overflow: "hidden",width:"100%", height: "560px"  }}>
          <img
            src="https://cdn.pixabay.com/photo/2020/04/08/02/57/switch-5015530_1280.jpg"
            alt="bg"
            width="100%"
            height="100%"
            style={{objectFit:"cover"}}
          />
        </Box>
        <Matrix />
        <Typography variant="h4" sx={{ width: "100%", fontWeight: 600 }}>
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
