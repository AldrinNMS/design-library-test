import {Paper, Typography, Stack, Tab, Tabs, Box} from "@mui/material";
import React, {Fragment, useState} from "react";
import Chart from "react-apexcharts";
import {CHART_DATA} from "../../../config/data";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const SplineChart = () => {
  const codeExample = `import {Paper, Typography, Stack, Tab, Tabs, Box} from "@mui/material";
  import React, {Fragment, useState} from "react";
  import Chart from "react-apexcharts";
  import {CHART_DATA} from "../../../config/data";
  import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";

    export const SplineChart = () => {
     const options = {
      chart: {
        type: "area",
        fontFamily: "Lato",
        toolbar: {
          show: false,
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 2,
          dashArray: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
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
  
      colors: ["#00B9ED", "#FFB83F"],
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
                  <Typography variant="h4">Area Chart</Typography>
                  <ChartDropdown />
                </Stack>
                <Paper elevation={0}>
                  <Chart
                    options={options}
                    series={CHART_DATA}
                    type="area"
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
      type: "area",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
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

    colors: ["#00B9ED", "#FFB83F"],
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
                <Typography variant="h4">Area Chart</Typography>
                <ChartDropdown />
              </Stack>
              <Paper elevation={0}>
                <Chart
                  options={options}
                  series={CHART_DATA}
                  type="area"
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
