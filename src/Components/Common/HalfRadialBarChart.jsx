import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

export default function HalfRadialBarChart({ speed }) {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const value = speed;

  // Trigger both chart and counter when in view
  if (inView && !startCounting) {
    setStartCounting(true);
  }

  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 800,
        },
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: "70%",
        },
        track: {
          background: "#e7e7e7",
          strokeWidth: "100%",
          margin: 0,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 10,
            fontSize: "24px",
            fontWeight: 700,
            formatter: () => "",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "linear",
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "#ED1B24", opacity: 1 },
          { offset: 100, color: "#C20008", opacity: 1 },
        ],
        gradientToColors: ["#C20008"],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Average Results"],
  };
  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", maxWidth: "300px" }}
    >
      {startCounting && (
        <>
          <ReactApexChart
            options={options}
            series={[value]}
            type="radialBar"
            height={300}
          />
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            <CountUp end={value} duration={1.5} suffix=" MB" />
          </div>
        </>
      )}
    </div>
  );
}
HalfRadialBarChart.propTypes = {
  speed: PropTypes.number.isRequired,
};
