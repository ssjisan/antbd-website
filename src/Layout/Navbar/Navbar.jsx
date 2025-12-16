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
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useContext(DataContext);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const drawerContent = (
    <Box sx={{ width: 250, p: 2 }}>
      <Stack spacing={2}>
        {main.map((data) => {
          const isActive = location.pathname === data.link;
          return (
            <Box
              key={data.id}
              component={Link}
              to={data.link}
              onClick={() => {
                goToTop();
                setOpen(false);
              }}
              sx={{
                p: "8px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                backgroundColor: isActive ? "primary.light" : "transparent",
                color: isActive ? "primary.main" : "text.primary",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Typography fontWeight={isActive ? 700 : 500}>
                {data.title}
              </Typography>
            </Box>
          );
        })}
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
            }}
          >
            <Logo green="#008641" red="#ED1B24" black="#000" size="48px" />
          </Box>

          {/* Menu items for md and up */}
          <Stack
            flexDirection="row"
            gap={isMdUp ? "8px" : "16px"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {main.map((data) => {
              const isActive = location.pathname === data.link;
              return (
                <Box
                  key={data.id}
                  component={Link}
                  to={data.link}
                  onClick={goToTop}
                  sx={{
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
                </Box>
              );
            })}
          </Stack>

          {/* Self Portal button for md and up */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              onClick={toggleLang}
              sx={{
                ml: 2,
                px: 2,
                py: "6px",
                borderRadius: "8px",
                textTransform: "none",
                backgroundColor: "rgba(59, 130, 246, 0.12)",
                color: "#3B82F6",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(59, 130, 246, 0.18)",
                },
              }}
            >
              {lang === "en" ? "বাংলা" : "English"}
            </Button>
            <Button variant="contained" size={isMdUp ? "small" : "large"}>
              Self Portal
            </Button>
          </Box>

          {/* Hamburger for xs-sm only */}
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
