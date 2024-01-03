import React, {useState} from "react";
import {Paper, Typography, Stack, Tab, Tabs, Box} from "@mui/material";
import {Fragment} from "react";
import {CHART_DATA} from "../../../config/data";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const BasicLineChart = () => {
  const codeExample = `
import React, {useState} from "react";
import {Paper, Typography, Stack} from "@mui/material";
import {Fragment} from "react";
import {CHART_DATA} from "../../../config/data";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";

export const BasicLineChart = () => {
  const options = {
    chart: {
      type: "line",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 4,
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
    yaxis: {
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      show: true,
      borderColor: "#E3E7EA",
      strokeDashArray: 10,
      position: "back",
    },
    colors: ["#638BCC", "#FF4545"],
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
                marginBottom={0}
              >
                <Typography variant="h4">Line Chart</Typography>
                <ChartDropdown />
              </Stack>
              <Paper elevation={0}>
                <Chart
                  options={options}
                  series={CHART_DATA}
                  type="line"
                  height={350}
                />
              </Paper>
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
      type: "line",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 4,
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
    yaxis: {
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      show: true,
      borderColor: "#E3E7EA",
      strokeDashArray: 10,
      position: "back",
    },
    colors: ["#638BCC", "#FF4545"],
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
                marginBottom={0}
              >
                <Typography variant="h4">Line Chart</Typography>
                <ChartDropdown />
              </Stack>
              <Paper elevation={0}>
                <Chart
                  options={options}
                  series={CHART_DATA}
                  type="line"
                  height={350}
                />
              </Paper>
            </Box>
          }
          syntaxTab={<CodeBlock code={codeExample} />}
        />
      </Paper>
    </Fragment>
  );
};
