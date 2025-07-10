import { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const timelineData = [
  {
    year: "2001",
    title: "Started our journey as a Cyber Café",
    image: "cybercafe.jpg",
  },
  {
    year: "2008",
    title: "Became Category A ISP",
    image: "categoryA.webp",
  },
  {
    year: "2013",
    title: "Opened zonal offices in major districts",
    image: "office.jpg",
  },
  {
    year: "2015",
    title: "Reached full nationwide coverage",
    image: "nationwide.jpg",
  },
];

const yearList = [2001, 2008, 2013, 2015];

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(2001);
  const [displayYear, setDisplayYear] = useState(2001);
  const intervalRef = useRef(null);

  const current = timelineData.find(
    (item) => item.year === selectedYear.toString()
  );

  // Animate year counter
  useEffect(() => {
    const start = displayYear;
    const end = selectedYear;
    if (start === end) return;

    const duration = 500;
    const stepTime = 30;
    const steps = Math.ceil(duration / stepTime);
    const increment = (end - start) / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const nextValue = Math.round(start + increment * currentStep);
      setDisplayYear(nextValue);

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayYear(end);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [selectedYear]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [selectedYear]);

  const startAutoSlide = () => {
    stopAutoSlide(); // clear previous
    intervalRef.current = setInterval(() => {
      setSelectedYear((prev) => {
        const currentIndex = yearList.indexOf(prev);
        const nextIndex = (currentIndex + 1) % yearList.length;
        return yearList[nextIndex];
      });
    }, 5000); // every 5 seconds
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    startAutoSlide(); // restart the timer
  };

  return (
    <Container sx={{ pt: "64px", pb: "64px" }}>
      <Typography variant="h3" mb={8} sx={{ textAlign: "center" }}>
        Our Story
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left Image */}
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src={current.image}
              height="460"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "16px",
                transition: "0.3s ease",
              }}
              alt={current.title}
            />
          </Box>
        </Grid>

        {/* Center Content */}
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Stack
            sx={{ pl: { md: "100px" }, mt: { xs: "32px", md: "0" } }}
            gap="12px"
          >
            <Typography
              sx={{
                fontSize: "100px !important",
                fontWeight: "900 !important",
                color: "transparent",
                WebkitTextStroke: "2px #ED1B24",
              }}
            >
              {displayYear}
            </Typography>
            <Typography
              sx={{
                fontSize: "24px !important",
                lineHeight: "36px",
                minHeight: "72px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {current.title}
            </Typography>
          </Stack>
        </Grid>

        {/* Right Year Buttons */}
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Stack gap="12px">
            {yearList.map((year) => {
              const isActive = selectedYear === year;
              return (
                <Stack
                  key={year}
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={() => handleYearClick(year)}
                  gap="8px"
                >
                  <Typography
                    sx={{
                      fontWeight: isActive ? "bold" : "normal",
                      fontSize: isActive
                        ? "24px !important"
                        : "16px !important",
                      color: isActive ? "#ED1B24" : "#111827",
                      transition: "all 0.2s ease",
                      lineHeight: "36px",
                    }}
                  >
                    {year}
                  </Typography>
                  <Box
                    sx={{
                      width: isActive ? 16 : 8,
                      height: isActive ? 16 : 8,
                      borderRadius: "50%",
                      bgcolor: isActive ? "#ED1B24" : "#111827",
                      transition: "all 0.2s ease",
                    }}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
