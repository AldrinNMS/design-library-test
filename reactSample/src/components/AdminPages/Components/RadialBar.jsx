import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import {Fragment} from "react";
import {CHART_DATA, PIE_CHART} from "../../../config/data";
import Chart from "react-apexcharts";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const RadialBar = () => {
  const codeExample = `
import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import {Fragment} from "react";
import {CHART_DATA, PIE_CHART} from "../../../config/data";
import Chart from "react-apexcharts";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";

export const RadialBar = () => {
  const options = {
    chart: {
      type: "radialBar",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "18px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 300;
            },
          },
        },
      },
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,

      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    grid: {
      show: true,
      borderColor: "#E3E7EA",
      strokeDashArray: 10,
      position: "back",
    },
    stroke: {
      width: 2,
      lineCap: "round",
    },

    colors: ["#00B9ED", "#78E236", "#FFB83F", "#FF4545"],
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <CustTab
          label1={"Preview"}
          label2={"JSX"}
          chartTab={
            <Box>
              <Typography variant="h4">Radial Bar</Typography>
              <Chart
                options={options}
                series={PIE_CHART}
                type="radialBar"
                height={350}
              />
            </Box>
          }
          syntaxTab={<CodeBlock code={codeExample} />}
        />
      </Paper>
    </Fragment>
  );
};
`;

  const options = {
    chart: {
      type: "radialBar",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "18px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 300;
            },
          },
        },
      },
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,

      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    grid: {
      show: true,
      borderColor: "#E3E7EA",
      strokeDashArray: 10,
      position: "back",
    },
    stroke: {
      width: 2,
      lineCap: "round",
    },

    colors: ["#00B9ED", "#78E236", "#FFB83F", "#FF4545"],
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <CustTab
          label1={"Preview"}
          label2={"JSX"}
          chartTab={
            <Box>
              <Typography variant="h4">Radial Bar</Typography>
              <Chart
                options={options}
                series={PIE_CHART}
                type="radialBar"
                height={350}
              />
            </Box>
          }
          syntaxTab={<CodeBlock code={codeExample} />}
        />
      </Paper>
    </Fragment>
  );
};
