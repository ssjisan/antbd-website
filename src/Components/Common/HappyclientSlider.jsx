import { Box, Container, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";

const items = [
  "/client/1.png",
  "/client/2.png",
  "/client/3.png",
  "/client/4.png",
  "/client/5.png",
  "/client/6.png",
];

export default function HappyclientSlider() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const cardSize = isMobile ? 120 : isTablet ? 120 : 160;
  const duplicatedItems = [...items, ...items];
  const speed = 1.5;

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
  }, []);

  const handleMouseEnter = () => cancelAnimationFrame(animationRef.current);
  const handleMouseLeave = () => {
    animationRef.current = requestAnimationFrame(scroll);
  };

  return (
    <Container sx={{ pt: "80px", pb: "80px" }}>
      <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
        {/* Left Gradient Overlay */}
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200px",
              height: "100%",
              zIndex: 2,
              background:
                "linear-gradient(90deg,rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Right Gradient Overlay */}
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "200px",
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
          {duplicatedItems.map((item, idx) => (
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
                src={item}
                alt={`img-${idx}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "none",
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
