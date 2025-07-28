import {
  Box,
  Grid,
  Stack,
  Tabs,
  Tab,
  Typography,
  Skeleton,
} from "@mui/material";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function CoverageList({
  zones = [],
  selectedZone,
  setSelectedZone,
  areas = [],
  selectedArea,
  setSelectedArea,
  isLoadingZones = false,
  isLoadingAreas = false,
}) {
  const userHasSelected = useRef(false);
  const filteredAreas = areas.filter((area) => area.zone === selectedZone);

  return (
    <Box>
      {/* Zone Tabs */}
      {isLoadingZones ? (
        <Stack direction="row" spacing={2} px={3} mb={3}>
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              width={120}
              height={48}
              sx={{ borderRadius: "12px" }}
            />
          ))}
        </Stack>
      ) : (
        <Tabs
          value={selectedZone}
          onChange={(e, newValue) => setSelectedZone(newValue)}
          sx={{ mb: 3, borderRadius: "8px", px: 3 }}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          {zones.map((zone) => (
            <Tab
              key={zone._id}
              label={zone.name}
              value={zone._id}
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
                color: selectedZone === zone._id ? "#fff" : "#008641",
                backgroundColor:
                  selectedZone === zone._id ? "#008641" : "#CBE2DA",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor:
                    selectedZone === zone._id ? "#008641" : "#d5d5d5",
                },
                "&.Mui-selected": {
                  color: "#fff",
                },
              }}
            />
          ))}
        </Tabs>
      )}

      {/* Area Cards */}
      <Grid container spacing={2} px={3}>
        {isLoadingAreas ? (
          [...Array(6)].map((_, i) => (
            <Grid item xs={12} sm={6} md={12} lg={4} key={i}>
              <Stack spacing={1}>
                <Skeleton variant="rounded" height={200} />
                <Skeleton width="60%" height={30} />
                <Skeleton width="80%" height={20} />
              </Stack>
            </Grid>
          ))
        ) : filteredAreas.length > 0 ? (
          filteredAreas.map((area) => {
            const isSelected =
              selectedArea?._id === area._id ||
              selectedArea?.id === area._id ||
              selectedArea?._id === area.id;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={12}
                lg={4}
                key={area._id || area.id}
              >
                <Stack
                  onClick={() => {
                    setSelectedArea(area);
                    userHasSelected.current = true;
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
                      src={area?.coverPhoto?.url}
                      alt={area.areaName}
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
                      {area.areaName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {area.address}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{textAlign:"center", mt:5}}
              >
                🚫 No area covered yet.
              </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

CoverageList.propTypes = {
  zones: PropTypes.array.isRequired,
  selectedZone: PropTypes.string.isRequired,
  setSelectedZone: PropTypes.func.isRequired,
  areas: PropTypes.array,
  selectedArea: PropTypes.object,
  setSelectedArea: PropTypes.func,
  isLoadingZones: PropTypes.bool,
  isLoadingAreas: PropTypes.bool,
};
