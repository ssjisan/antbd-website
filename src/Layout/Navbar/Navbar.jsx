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
import { useState } from "react";
import Logo from "../../assets/Logo";
import { main } from "./NavConfig"; // Your menu list
import { Menu } from "../../assets/Icons/Navbar/Icons";

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
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
              to={data.path}
              onClick={toggleDrawer(false)}
              sx={{
                p: "8px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                backgroundColor: isActive ? "primary.light" : "transparent",
                color: isActive ? "primary.main" : "text.primary",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "primary.main",
                },
              }}
            >
              <Typography fontWeight={isActive ? 700 : 500}>
                {data.title}
              </Typography>
            </Box>
          );
        })}
        <Button variant="contained" size="small">
          Sign in
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ borderBottom: "1px solid rgba(145, 142, 175, 0.24)" }}>
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
                  to={data.path}
                  sx={{
                    p: "8px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    backgroundColor: isActive ? "primary.light" : "transparent",
                    color: isActive ? "primary.main" : "text.primary",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "primary.main",
                    },
                  }}
                >
                  <Typography fontWeight={isActive ? 700 : 500}>
                    {data.title}
                  </Typography>
                </Box>
              );
            })}
          </Stack>

          {/* Sign in button for md and up */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button variant="contained" size={isMdUp ? "small" : "large"}>
              Sign in
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
