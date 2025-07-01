import { Box } from "@mui/material";
import PropTypes from "prop-types";

const RippleRing = ({ delay = 0 }) => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#11743a", // filled solid color
      animation: `pulse-ring 6s ease-out infinite`,
      animationDelay: `${delay}s`,
      opacity: 0,
      zIndex: 1,
      "@keyframes pulse-ring": {
        "0%": {
          width: "20px",
          height: "20px",
          opacity: 0.6,
        },
        "100%": {
          width: "150px",
          height: "150px",
          opacity: 0,
        },
      },
    }}
  />
);
export default function CoverageAnimation() {
  return (
    <>
      {/* Image with Overlay */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "64%" },
          height: "548px",
          borderRadius: 2,
          "@media (max-width: 467px)": {
            display: "none",
          },
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('/map.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            mixBlendMode: "luminosity",
            zIndex: 0,
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: {
              xs: "linear-gradient(360deg, rgba(255, 255, 255, 0) 50%, #FFFFFF 100%)",
              md: "linear-gradient(269.58deg, rgba(255, 255, 255, 0) 61.98%, #FFFFFF 94.88%)",
            },
            zIndex: 1,
          }}
        />

        {/* Ripple Container */}
        <Box
          sx={{
            position: "absolute",
            top: "130px",
            right: "359px",
            width: "0px",
            height: "0px",
            transform: "translate(50%, 0%)",
            zIndex: 1,
          }}
        >
          {[0, 1.2, 2.4, 3.6].map((delay, index) => (
            <RippleRing key={index} delay={delay} />
          ))}
        </Box>

        {/* Route Image */}
        <Box
          sx={{
            position: "absolute",
            top: "130px",
            right: "110px",
            zIndex: 2,
            mixBlendMode: "normal",
          }}
        >
          <svg
            width="252"
            height="363"
            viewBox="0 0 252 363"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="animatedPath"
              d="M174 360H222.513C224.903 360 226.76 357.917 226.486 355.542L210 212.5C209.167 204.5 210.6 188.3 223 187.5L240.12 183.663C246.478 182.238 250.21 175.631 248.15 169.45L244.917 159.751C244.33 157.989 244.466 156.067 245.297 154.407L245.5 154C247 153.333 249.7 150.4 248.5 144L233.5 96.9999C231.833 90.8332 220.9 79.4999 190.5 83.4999C186.416 83.3638 178.531 82.3161 174.252 79.3218C172.586 78.1562 170.774 76.942 168.744 76.8459L7.76357 69.2255C5.09705 69.0993 3 66.9006 3 64.2311V2.5"
              stroke="url(#paint0_linear)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="114.549"
                y1="-44.4894"
                x2="56.9328"
                y2="348.19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#11743A" />
                <stop offset="0.354167" stopColor="#11743A" />
                <stop offset="1" stopColor="#11743A" />
              </linearGradient>
            </defs>
            <style>
              {`
        #animatedPath {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: drawPath 8s ease forwards, waitAndReset 4s linear infinite;
        }

        @keyframes drawPath {
          0% {
            stroke-dashoffset: 1200;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes waitAndReset {
          0% {
            stroke-dashoffset: 1200;
          }
          50% {
            stroke-dashoffset: 0;
          }
          99.999% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 1200;
          }
        }
      `}
            </style>
          </svg>
        </Box>

        {/* Start Pins */}
        <Box
          component="img"
          src="/start.svg"
          alt="Start"
          sx={{
            position: "absolute",
            top: "120px",
            right: "347px",
            zIndex: 3,
            mixBlendMode: "normal",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "42px",
            right: "180px",
            zIndex: 2,
            mixBlendMode: "normal",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#11743A" />
            <circle cx="12" cy="12" r="8" fill="#11743A" />
          </svg>
        </Box>
      </Box>
    </>
  );
}
RippleRing.propTypes = {
  delay: PropTypes.number,
};
