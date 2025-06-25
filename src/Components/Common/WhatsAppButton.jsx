import { Stack, Tooltip, Typography } from "@mui/material";

export default function WhatsAppButton() {
  return (
    <Tooltip title="Go To Top">
      <Stack
        gap="8px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "fixed",
          bottom: {
            xs: 32,
            sm: 40,
            md: 48,
          },
          right: {
            xs: 16,
            sm: 24,
            md: 48,
          },
          zIndex: 1000,
          height: "48px",
          width: "156px",
          borderRadius: "100px",
          cursor: "pointer",
          background: "#0F8F4D",
          color: "#FFF",
        }}
      >
        <img src="WhatsApp.png" alt="WhatsApp Logo" />
        <Typography>Chat with us</Typography>
      </Stack>
    </Tooltip>
  );
}
