import React from "react";
import {Paper, Typography, Stack, Box} from "@mui/material";
import {Fragment} from "react";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import {COLUMN_DATA} from "../../../config/data";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const ColumnChart = () => {
  const codeExample = `
  import React from "react";
import {Paper, Typography, Stack, Box} from "@mui/material";
import {Fragment} from "react";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import {COLUMN_DATA} from "../../../config/data";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";

export const ColumnChart = () => {
  const options = {
    chart: {
      type: "bar",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    plotOptions: {
      bar: {
        borderRadius: {
          left: 10,
          right: 10,
          top: 0,
        },
        columnWidth: 20,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },

    xaxis: {
      categories: [
        "00:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
      ],
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "top",
      horizontalAlign: "right",
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

    colors: ["#00B9ED", "#FF4545", "#FFB83F"],
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <CustTab
          label1={"Preview"}
          label2={"JSX"}
          chartTab={
            <Box>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                marginBottom={2}
              >
                <Typography variant="h4">Column Chart</Typography>
                <ChartDropdown />
              </Stack>

              <Chart
                options={options}
                series={COLUMN_DATA}
                type="bar"
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
      type: "bar",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    plotOptions: {
      bar: {
        borderRadius: {
          left: 10,
          right: 10,
          top: 0,
        },
        columnWidth: 20,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },

    xaxis: {
      categories: [
        "00:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
      ],
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "top",
      horizontalAlign: "right",
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

    colors: ["#00B9ED", "#FF4545", "#FFB83F"],
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <CustTab
          label1={"Preview"}
          label2={"JSX"}
          chartTab={
            <Box>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                marginBottom={2}
              >
                <Typography variant="h4">Column Chart</Typography>
                <ChartDropdown />
              </Stack>

              <Chart
                options={options}
                series={COLUMN_DATA}
                type="bar"
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
