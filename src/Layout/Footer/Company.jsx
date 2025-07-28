import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Coverage Area", path: "/coverage" },
  { label: "Help & Support", path: "/support" },
  { label: "Packages", path: "/package" },
];

export default function Company() {
  return (
    <Stack gap="24px">
      <Typography variant="h6">Company</Typography>

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
