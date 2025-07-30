import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "../../assets/Icons/Common/Icons";
import { Menu } from "../../assets/Icons/Navbar/Icons";

const differentiators = [
  {
    title: "Low-Latency Network Design",
    desc: "Optimized infrastructure for seamless gaming, streaming, and real-time communications.",
  },
  {
    title: "Rapid Deployment & Support",
    desc: "Equipped with N+1 redundancy, climate control, and enterprise-grade uptime SLAs to ensure maximum reliability.",
  },
  {
    title: "Uninterrupted Service Plans",
    desc: "Unlimited usage with guaranteed throughput and no Fair Usage Policy (FUP).",
  },
  {
    title: "Advanced Core Infrastructure",
    desc: "Scalable network built on industry-leading equipment from Cisco, Juniper, Huawei, and MikroTik.",
  },
];

export default function TechnicalDifferentiators() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const visibleCount = isSm ? 1 : 2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = differentiators.length;

  const getIndex = (offset) => (currentIndex + offset) % total;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const visibleCards = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleCards.push(differentiators[getIndex(i)]);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total); // ✅ functional update
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []); // ✅ run only once on mount

  return (
    <Box
      sx={{
        backgroundColor: "#111827",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Background SVG */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <img
          src="https://res.cloudinary.com/dr0jcn0ds/image/upload/v1753900926/website/section-images/About/bgsvg_iev8oz.png"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={3}>
          {/* Controller */}
          <Grid item xs={12} md={4}>
            <Stack gap="48px">
              <Typography sx={{ color: "#FFF" }} variant="h3">
                Built for Performance and Reliability
              </Typography>
              <Stack direction="row" gap="16px">
                <IconButton
                  size="small"
                  onClick={handlePrev}
                  sx={{ border: "1px solid #FFF", color: "#FFF" }}
                >
                  <ArrowLeft size="24px" color="#FFF" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handleNext}
                  sx={{ border: "1px solid #FFF", color: "#FFF" }}
                >
                  <ArrowRight size="24px" color="#FFF" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <Box
                sx={{
                  display: "flex",
                  width: `${(100 / visibleCount) * total}%`,
                  transform: `translateX(-${(100 / total) * currentIndex}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {differentiators.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      flex: `0 0 ${100 / total}%`,
                      px: 1,
                      boxSizing: "border-box",
                    }}
                  >
                    <Stack
                      gap="24px"
                      sx={{
                        p: "24px",
                        background: "#FFF",
                        borderRadius: "20px",
                        minHeight: "260px",
                      }}
                    >
                      <Menu size="32px" color="#111827" />
                      <Stack>
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="body1" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
