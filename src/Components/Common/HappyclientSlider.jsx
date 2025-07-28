import { Box, Container, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function HappyclientSlider() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const [clients, setClients] = useState([]);
  
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const cardSize = isMobile ? 120 : isTablet ? 120 : 160;
  const speed = 1.5;

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get("/clients");
        setClients(res.data || []);
      } catch (error) {
        console.error("Failed to load clients:", error);
      }
    };
    fetchClients();
  }, []);

  // Duplicate the clients array for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  const scroll = () => {
    positionRef.current -= speed;

    const el = sliderRef.current;
    if (el) {
      const scrollWidth = el.scrollWidth / 2;
      if (Math.abs(positionRef.current) >= scrollWidth) {
        positionRef.current = 0;
      }
      el.style.transform = `translateX(${positionRef.current}px)`;
    }

    animationRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clients]);

  const handleMouseEnter = () => cancelAnimationFrame(animationRef.current);
  const handleMouseLeave = () => {
    animationRef.current = requestAnimationFrame(scroll);
  };

  return (
    <Container sx={{ pt: "80px", pb: "80px" }}>
      <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "160px",
              height: "100%",
              zIndex: 2,
              background:
                "linear-gradient(90deg,rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
              pointerEvents: "none",
            }}
          />
        )}

        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "160px",
              height: "100%",
              zIndex: 2,
              background:
                "linear-gradient(270deg,rgb(255, 255, 255) 0%, rgba(242, 244, 248, 0) 100%)",
              pointerEvents: "none",
            }}
          />
        )}

        <Box
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            display: "flex",
            width: "max-content",
            gap: 2,
            willChange: "transform",
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <Box
              key={idx}
              sx={{
                flex: `0 0 ${cardSize}px`,
                height: `${cardSize}px`,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <img
                src={client.image?.url}
                alt={client.name || `client-${idx}`}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
