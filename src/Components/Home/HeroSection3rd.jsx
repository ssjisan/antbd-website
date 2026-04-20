import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HeroSection3rd() {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION = 5000; // 5s

  // 📡 fetch slides
  useEffect(() => {
    const fetchSlides = async () => {
      const { data } = await axios.get("/all-sliders");
      setSlides(data?.filter((s) => s.publishStatus) || []);
    };
    fetchSlides();
  }, []);

  // 🔁 auto slide + progress bar
  useEffect(() => {
    if (!slides.length) return;

    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (DURATION / 100);
        return next >= 100 ? 0 : next;
      });
    }, 100);

    const slideTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(slideTimer);
    };
  }, [index, slides]);

  if (!slides.length) return null;

  return (
    <Container sx={{ py: { xs: 2, md: 6 } }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          aspectRatio: "1320 / 560",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {slides.map((slide, i) => (
          <Box
            key={slide._id}
            component="img"
            src={slide.coverPhoto?.url}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1)" : "scale(1.05)",
              transition: "all 1s ease",
            }}
          />
        ))}
      </Box>
    </Container>
  );
}
