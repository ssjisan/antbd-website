import { Box, Container, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, ArrowRight } from "../../assets/Icons/Common/Icons";

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

  // ⬅️➡️ controls
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

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
        {/* 🖼 Slides */}
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

        {/* 🌑 overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.05))",
            pointerEvents: "none",
          }}
        />

        {/* 🎛 Bottom Controls */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 16, sm: 24 },
            left: { xs: 16, sm: 24 },
            right: { xs: 16, sm: 24 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 5,
            color: "#fff",
          }}
        >
          {/* 🔢 Slide Counter */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {slides.map((_, i) => (
              <Box
                key={i}
                sx={{
                  fontSize: 14,
                  fontWeight: i === index ? 700 : 400,
                  opacity: i === index ? 1 : 0.4,
                  transition: "0.3s",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Box>
            ))}
          </Box>

          {/* ⏳ Progress Bar */}
          <Box
            sx={{
              flex: 1,
              mx: 3,
              height: 3,
              background: "rgba(255,255,255,0.2)",
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: `${progress}%`,
                height: "100%",
                background: "#fff",
                transition: "width 0.1s linear",
              }}
            />
          </Box>

          {/* ⬅️➡️ Arrows */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={prevSlide}
              sx={{
                backgroundColor: "rgba(255,255,255,0.9)",
                color: "#000",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: "#fff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <ArrowLeft color="#000000" size="24px" />
            </IconButton>

            <IconButton
              onClick={nextSlide}
              sx={{
                backgroundColor: "rgba(255,255,255,0.9)",
                color: "#000",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: "#fff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <ArrowRight color="#000000" size="24px" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
