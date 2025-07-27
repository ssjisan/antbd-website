import { Box, Container, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { useState } from "react";

const HelpCard = ({ imageSrc, title, phoneText, description, linkText }) => {
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
        {phoneText && (
          <Typography variant="h6" color="text.secondary">
            Call us on{" "}
            <Box
              component="span"
              sx={{
                textDecoration: "underline",
                color: "#008641",
              }}
            >
              0808 196 6262
            </Box>
          </Typography>
        )}
        {linkText && (
          <Typography
            variant="h6"
            sx={{ textDecoration: "underline", color: "#008641" }}
          >
            {linkText}
          </Typography>
        )}
        <Typography variant="h6" color="text.secondary">
          Monday to Friday, 9am - 8pm, weekends and bank holidays, 9am - 5pm.
        </Typography>
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
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <HelpCard
            imageSrc="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753612957/website/section-images/n1_n5q65q.webp"
            title="To get connected with us"
            phoneText
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <HelpCard
            imageSrc="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753612956/website/section-images/n2_acoi9g.webp"
            title="For Customer Service"
            phoneText
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <HelpCard
            imageSrc="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753612954/website/section-images/n3_ngaju5.webp"
            title="For more help"
            linkText="Visit our Help pages"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
