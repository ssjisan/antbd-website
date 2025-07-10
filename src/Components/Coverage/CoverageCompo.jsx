import { Box, Grid } from "@mui/material";
import { useState } from "react";
import CoverageList from "./CoverageList";
import CoverageMap from "./CoverageMap";
import coverageAreas from "./CoverageAreas"; // your JSON file

export default function CoverageCompo() {
  const [selected, setSelected] = useState(7);

  return (
    <Box sx={{ position: "relative", pt: "40px" }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <CoverageList
            coverageAreas={coverageAreas}
            selected={selected}
            setSelected={setSelected}
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
            <CoverageMap coverageAreas={coverageAreas} selected={selected} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
