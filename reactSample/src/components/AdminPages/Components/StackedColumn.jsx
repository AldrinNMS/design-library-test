import React from "react";
import {Paper, Typography, Stack, Box} from "@mui/material";
import {Fragment} from "react";
import {STACKEDCOLUMN_DATA} from "../../../config/data";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const StackedColumn = () => {
  const codeExample = `
  import React from "react";
import {Paper, Typography, Stack, Box} from "@mui/material";
import {Fragment} from "react";
import {STACKEDCOLUMN_DATA} from "../../../config/data";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";

export const StackedColumn = () => {
  const options = {
    chart: {
      type: "bar",
      fontFamily: "Lato",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: 20,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "Jan",

        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
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
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                marginBottom={2}
              >
                <Typography variant="h4">Stacked Column Chart</Typography>
                <ChartDropdown />
              </Stack>
              <Chart
                options={options}
                series={STACKEDCOLUMN_DATA}
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
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: 20,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "Jan",

        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
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
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                marginBottom={2}
              >
                <Typography variant="h4">Stacked Column Chart</Typography>
                <ChartDropdown />
              </Stack>
              <Chart
                options={options}
                series={STACKEDCOLUMN_DATA}
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
