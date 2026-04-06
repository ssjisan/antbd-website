"use client";
import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { WhatsappIcon } from "../../assets/Icons/Home/Icons";
import { Close } from "../../assets/Icons/Common/Icons";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "8801944111190";
  const message = "Hello! I need some help.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 90,
        right: 20,
        zIndex: 1300,
      }}
    >
      {/* Chat Card (Morphing Element) */}
      <Paper
        elevation={6}
        sx={{
          position: "absolute",
          bottom: 80,
          right: 0,
          width: 320,
          borderRadius: 3,
          overflow: "hidden",

          transformOrigin: "bottom right",
          transform: open ? "scale(1)" : "scale(0.2)",
          opacity: open ? 1 : 0,

          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            bgcolor: "#1c1c1c",
            color: "#fff",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" gap={1.5} alignItems="center">
            <WhatsappIcon size="32px" color="#fff" />
            <Box>
              <Typography fontSize={14} fontWeight="bold">
                Antaranga Dot Com Limited
              </Typography>
              <Typography fontSize={11} color="gray">
                Whatsapp
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Body */}
        <Box sx={{ bgcolor: "#f5f5f5", p: 2 }}>
          <Typography fontSize={12} mb={1}>
            Typically responds in under <b>15 minutes</b>
          </Typography>

          <Box
            sx={{
              bgcolor: "#fff",
              p: 1.5,
              borderRadius: 2,
              mb: 2,
              fontSize: 13,
              boxShadow: 1,
            }}
          >
            Hello! Contact us for new internet connections, package details, or
            technical support.
          </Box>

          <Button
            fullWidth
            variant="contained"
            onClick={() => window.open(whatsappURL, "_blank")}
            sx={{
              bgcolor: "#25D366",
              "&:hover": { bgcolor: "#1ebe5d" },
              fontWeight: "bold",
            }}
          >
            START CHAT →
          </Button>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            fontSize: 10,
            p: 1,
            color: "#888",
            bgcolor: "#eee",
          }}
        >
          SECURE END-TO-END ENCRYPTION
        </Box>
      </Paper>

      {/* Floating Button */}
      <Stack
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          bgcolor: "#25D366",
          color: "#fff",
          position: "relative",
          zIndex: 2,
          "&:hover": { bgcolor: "#1ebe5d" },
          width: "64px",
          height: "64px",
          borderRadius: "100%",
          cursor: "pointer",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {open ? (
          <Close size="36px" color="#fff" />
        ) : (
          <WhatsappIcon size="32px" color="#fff" />
        )}
      </Stack>
    </Box>
  );
}
