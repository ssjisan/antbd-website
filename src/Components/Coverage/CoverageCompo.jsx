import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CoverageList from "./CoverageList";
import CoverageMap from "./CoverageMap";
import axios from "axios";

export default function CoverageCompo() {
  const [zones, setZones] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedArea, setSelectedArea] = useState(null);
console.log(areas);

  // Load zones
  useEffect(() => {
    const fetchZones = async () => {
      try {
        const res = await axios.get("/zones");
        const zonesData = res.data || [];
        setZones(zonesData);

        if (zonesData.length > 0) {
          setSelectedZone(zonesData[0]._id);
        }
      } catch (error) {
        console.error("Failed to fetch zones:", error);
      }
    };
    fetchZones();
  }, []);

  // Load areas
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const res = await axios.get("/areas");
        setAreas(res.data || []);
      } catch (error) {
        console.error("Failed to fetch areas:", error);
      }
    };
    fetchAreas();
  }, []);

  // Auto-select first area in selected zone
  useEffect(() => {
    if (selectedZone && areas.length > 0) {
      const firstInZone = areas.find((area) => area.zone === selectedZone);
      if (firstInZone) setSelectedArea(firstInZone);
    }
  }, [selectedZone, areas]);

  return (
    <Box sx={{ position: "relative", pt: "40px" }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <CoverageList
            zones={zones}
            selectedZone={selectedZone}
            setSelectedZone={setSelectedZone}
            areas={areas}
            selectedArea={selectedArea}
            setSelectedArea={setSelectedArea}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              position: "sticky",
              top: "64px",
              height: "calc(95vh - 64px)",
              zIndex: 1,
              p: "32px",
            }}
          >
            <CoverageMap
              selected={selectedArea}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
