import { useEffect, useState, useRef } from "react";
import { Grid, Box, Typography, Stack, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";

export default function CoverageList({ coverageAreas, selected, setSelected }) {
  const [cityFilter, setCityFilter] = useState("dhaka");
  const userHasSelected = useRef(false);

  // Only dhaka and chattogram tabs now
  const fixedTabs = ["dhaka", "chattogram"];

  // Auto-select Shantinagar or Halishahar depending on city tab
  useEffect(() => {
    let targetName = null;

    if (cityFilter === "chattogram") {
      targetName = "Halishahar";
    } else if (cityFilter === "dhaka") {
      targetName = "Shantinagar";
    }

    const target = coverageAreas.find((area) => area.name === targetName);
    const currentSelectedArea = coverageAreas.find(
      (area) => area.id === selected
    );
    const currentCity = currentSelectedArea?.city?.toLowerCase();

    if (target && (!userHasSelected.current || currentCity !== cityFilter)) {
      setSelected(target.id);
      userHasSelected.current = false;
    }
  }, [cityFilter, coverageAreas, selected, setSelected]);

  // Filter and sort coverage areas based on city
  const filteredAreas = coverageAreas
    .filter((area) => area.city.toLowerCase() === cityFilter)
    .sort((a, b) => {
      if (cityFilter === "dhaka") {
        if (a.name === "Shantinagar") return -1;
        if (b.name === "Shantinagar") return 1;
      }
      if (cityFilter === "chattogram") {
        if (a.name === "Halishahar") return -1;
        if (b.name === "Halishahar") return 1;
      }
      return 0;
    });

  return (
    <Box>
      {/* City Tabs */}
      <Tabs
        value={cityFilter}
        onChange={(e, newValue) => setCityFilter(newValue)}
        sx={{ mb: 3, borderRadius: "8px", px: 3 }}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {fixedTabs.map((city) => {
          const isActive = cityFilter === city;
          return (
            <Tab
              key={city}
              label={city.charAt(0).toUpperCase() + city.slice(1)}
              value={city}
              disableRipple
              sx={{
                textTransform: "capitalize",
                fontWeight: 600,
                mx: 1,
                my: 0.5,
                borderRadius: "12px",
                px: "24px",
                py: "12px",
                minHeight: "unset",
                minWidth: "unset",
                color: isActive ? "#fff" : "#008641",
                backgroundColor: isActive ? "#008641" : "#CBE2DA",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: isActive ? "#008641" : "#d5d5d5",
                },
                "&.Mui-selected": {
                  color: "#fff",
                },
              }}
            />
          );
        })}
      </Tabs>

      {/* Area Grid */}
      <Grid
        container
        spacing={2}
        sx={{
          pl: { xs: "32px", sm: 0 }, // apply padding-left on xs, remove it on sm+
          p: { xs: "32px", sm: "32px" }, // apply full padding on sm+
        }}
      >
        {filteredAreas.map((area) => {
          const isSelected = selected === area.id;

          return (
            <Grid item xs={12} sm={6} md={12} lg={4} key={area.id}>
              <Stack
                onClick={() => {
                  setSelected(area.id);
                  userHasSelected.current = true;

                  // Update city tab if clicked card's city differs (shouldn't happen here because filtered)
                  if (area.city.toLowerCase() !== cityFilter) {
                    setCityFilter(area.city.toLowerCase());
                  }
                }}
                sx={{
                  borderRadius: "12px",
                  border: isSelected
                    ? "2px solid #28a745"
                    : "2px solid rgba(0, 0, 0, 0)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    "&:hover::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-75%",
                      height: "100%",
                      width: "50%",
                      background:
                        "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
                      transform: "skewX(-25deg)",
                      animation: "shine 0.9s forwards",
                    },
                    "@keyframes shine": {
                      "100%": {
                        left: "125%",
                      },
                    },
                  }}
                >
                  <img
                    src={area.image}
                    alt={area.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                <Stack spacing={0.5} mt={1} sx={{ p: "8px" }}>
                  <Typography variant="h6" fontWeight={600}>
                    {area.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {area.address}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

CoverageList.propTypes = {
  coverageAreas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setSelected: PropTypes.func.isRequired,
};
