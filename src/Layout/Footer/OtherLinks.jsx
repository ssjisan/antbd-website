import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function OtherLinks() {
  const navItems = [
    { label: "Pay bill", path: "/" },
    { label: "My Account", path: "/" },
    { label: "Request a connectio", path: "/request-connection" },
  ];

  return (
    <Stack gap="24px">
      <Typography
        variant="h6"
        sx={{
          textAlign: {
            xs: "right",
            sm: "left",
          },
        }}
      >
        Useful links
      </Typography>

      <Stack gap="8px" flexDirection="column">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            <Typography
              color="text.secondary"
              sx={{
                textAlign: {
                  xs: "right",
                  sm: "left",
                },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateX(10px)",
                  color: "primary.main",
                },
              }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
