// RadialBarChart.jsx
import { Box } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SpeedMeterChart = () => {
  const [chartData] = useState({
    series: [50],
    options: {
      chart: {
        height: 280,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,

          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120,
              show: false, // hide the label
            },
            value: {
              offsetY: 76,
              fontSize: "20px",
              color: undefined,
              fontWeight: 700,
              formatter: function (val) {
                return val + " Mbps";
              },
            },
          },
        },
      },
      fill: {
        colors: ["#de1922"], // use your custom color here
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Speed"],
    },
  });

  return (
    <Box
      id="chart"
      sx={{
        height: 278,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={280}
      />
    </Box>
  );
};

export default SpeedMeterChart;
