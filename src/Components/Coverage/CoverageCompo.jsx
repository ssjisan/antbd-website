import {
  Box,
  Grid,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import CoverageList from "./CoverageList";
import CoverageMap from "./CoverageMap";
import axios from "axios";
import { Close } from "./../../assets/Icons/Common/Icons";

export default function CoverageCompo() {
  const [zones, setZones] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedArea, setSelectedArea] = useState(null);
  const [loadingZones, setLoadingZones] = useState(true);
  const [loadingAreas, setLoadingAreas] = useState(true);
  const [openMapModal, setOpenMapModal] = useState(false);

  const isSm = useMediaQuery("(max-width:767px)");

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
      } finally {
        setLoadingZones(false);
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
      } finally {
        setLoadingAreas(false);
      }
    };
    fetchAreas();
  }, []);

  // Auto-select first area in selected zone (only for large screens)
  useEffect(() => {
    if (!isSm && selectedZone && areas.length > 0) {
      const firstInZone = areas.find((area) => area.zone === selectedZone);
      if (firstInZone) setSelectedArea(firstInZone);
    }
  }, [selectedZone, areas, isSm]);

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    if (isSm) setOpenMapModal(true); // open map modal on mobile
  };
  useEffect(() => {
    if (isSm) {
      setSelectedArea(null); // <- avoid showing selected styles
    }
  }, [isSm]);
  return (
    <Box sx={{ position: "relative", pt: "40px" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <CoverageList
            zones={zones}
            selectedZone={selectedZone}
            setSelectedZone={setSelectedZone}
            areas={areas}
            selectedArea={selectedArea}
            setSelectedArea={handleAreaSelect}
            isLoadingZones={loadingZones}
            isLoadingAreas={loadingAreas}
          />
        </Grid>

        {/* Map in right column only on md and up */}
        {!isSm && (
          <Grid item xs={12} sm={12} md={6} lg={4}>
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
                loadingMap={loadingZones || loadingAreas}
              />
            </Box>
          </Grid>
        )}
      </Grid>
      <Dialog
        open={openMapModal}
        onClose={() => setOpenMapModal(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={() => setOpenMapModal(false)}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
          >
            <Close size="24px" color="#000" />
          </IconButton>
          <Box sx={{ width: "100%", height: "80vh" }}>
            <CoverageMap
              selected={selectedArea}
              loadingMap={loadingZones || loadingAreas}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
