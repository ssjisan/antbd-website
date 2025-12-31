import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import Logo from "../../assets/Logo";
import { main } from "./NavConfig"; // Your menu list
import { Menu } from "../../assets/Icons/Navbar/Icons";
import { DataContext } from "../../DataProcessing/DataContext";
import SilverJubilee2 from "../../assets/SilverJubilee2";

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const { lang } = useContext(DataContext);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderMenuItem = (data) => {
    const isActive = location.pathname === data.link;

    return (
      <Box
        key={data.id}
        component={Link}
        to={data.link}
        onClick={goToTop}
        sx={{
          position: "relative",
          p: "8px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          backgroundColor: isActive ? "primary.light" : "transparent",
          color: isActive ? "primary.main" : "text.primary",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "background.onHover",
            color: "text.primary",
          },
        }}
      >
        <Typography fontWeight={isActive ? 700 : 500}>
          {lang === "en" ? data.title_en : data.title_bn}
        </Typography>

        {/* Chip badge */}
        {data.chip && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(50%, -50%)",
              bgcolor: "#FFD700", // bright yellow
              color: "#000", // black text for contrast
              px: "4px",
              py: "1px",
              borderRadius: "4px",
              fontSize: "0.625rem",
              fontWeight: 600,
              animation: "pulseGlow 1.5s infinite ease-in-out",
              "@keyframes pulseGlow": {
                "0%": {
                  backgroundColor: "#FFD700",
                  boxShadow: "0 0 0px #FFD700",
                },
                "50%": {
                  backgroundColor: "#FFE066",
                  boxShadow: "0 0 8px #FFE066",
                },
                "100%": {
                  backgroundColor: "#FFD700",
                  boxShadow: "0 0 0px #FFD700",
                },
              },
            }}
          >
            {data.chip}
          </Box>
        )}
      </Box>
    );
  };

  const drawerContent = (
    <Box sx={{ width: 250, p: 2 }}>
      <Stack spacing={2}>
        {main.map((data) => (
          <Box
            key={data.id}
            component={Link}
            to={data.link}
            onClick={() => {
              goToTop();
              setOpen(false);
            }}
            sx={{
              position: "relative",
              p: "8px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              backgroundColor:
                location.pathname === data.link
                  ? "primary.light"
                  : "transparent",
              color:
                location.pathname === data.link
                  ? "primary.main"
                  : "text.primary",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Typography
              fontWeight={location.pathname === data.link ? 700 : 500}
            >
              {lang === "en" ? data.title_en : data.title_bn}
            </Typography>

            {data.chip && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transform: "translate(50%, -50%)",
                  bgcolor: "#E53935", // rich red
                  color: "#fff",
                  px: "4px",
                  py: "1px",
                  borderRadius: "4px",
                  fontSize: "0.625rem",
                  fontWeight: 600,
                  overflow: "hidden",

                  animation: "pulseGlow 1.6s infinite ease-in-out",

                  /* Pulse glow */
                  "@keyframes pulseGlow": {
                    "0%": {
                      backgroundColor: "#E53935",
                      boxShadow: "0 0 0px rgba(229, 57, 53, 0.6)",
                    },
                    "50%": {
                      backgroundColor: "#EF5350",
                      boxShadow: "0 0 10px rgba(239, 83, 80, 0.9)",
                    },
                    "100%": {
                      backgroundColor: "#E53935",
                      boxShadow: "0 0 0px rgba(229, 57, 53, 0.6)",
                    },
                  },

                  /* Glassy shine */
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-120%",
                    width: "120%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 70%)",
                    animation: "shine 2.8s infinite",
                  },

                  "@keyframes shine": {
                    "0%": { left: "-120%" },
                    "60%": { left: "120%" },
                    "100%": { left: "120%" },
                  },
                }}
              >
                {data.chip}
              </Box>
            )}
          </Box>
        ))}
        <Button variant="contained" size="small">
          Self Portal
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 111,
        backgroundColor: "background.paper",
        borderBottom: "1px solid rgba(145, 142, 175, 0.24)",
      }}
    >
      <Container>
        <Stack
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          sx={{ p: "16px 0px" }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="/"
            onClick={goToTop}
            sx={{
              display: "flex",
              alignItems: "center",
              transition: "all 0.3s ease-in-out",
              "& svg": {
                transition: "all 0.3s ease-in-out",
              },
              height: "48px",
            }}
          >
            {/* <Logo green="#008641" red="#ED1B24" black="#000" size="48px" /> */}
            <SilverJubilee2 />
          </Box>

          {/* Menu items for md+ */}
          <Stack
            flexDirection="row"
            gap={isMdUp ? "8px" : "16px"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {main.map(renderMenuItem)}
          </Stack>

          {/* Self Portal button for md+ */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button variant="contained" size={isMdUp ? "small" : "large"}>
              Self Portal
            </Button>
          </Box>

          {/* Hamburger for xs-sm */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "rgba(145, 142, 175, 0.16)",
              }}
            >
              <Menu size="24px" color="#000" />
            </IconButton>
          </Box>
        </Stack>

        {/* Drawer */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Container>
    </Box>
  );
}
