import React from "react";
import {Paper, Typography, Stack, Box} from "@mui/material";
import {Fragment} from "react";
import {CHART_DATA, MIXED_CHART} from "../../../config/data";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const MixedChart = () => {
  const codeExample = `import React from "react";
  import {Paper, Typography, Stack, Box} from "@mui/material";
  import {Fragment} from "react";
  import {CHART_DATA, MIXED_CHART} from "../../../config/data";
  import Chart from "react-apexcharts";
  import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
  import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
  
  export const MixedChart = () => {
    const options = {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [0, 3, 3],
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
        ],
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
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
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        show: true,
        borderColor: "#E3E7EA",
        strokeDashArray: 10,
        position: "back",
      },
      colors: ["#FF4545", "#FFB83F", "#00B9ED"],
    };
    return (
      <Fragment>
        <Paper elevation={1}>
          <CustTab
            label1={"Preview"}
            label2={"JSX"}
            charTab={
              <Box>
                <Stack
                  direction="row"
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom={2}
                >
                  <Typography variant="h4">Mixed Charts</Typography>
                  <ChartDropdown />
                </Stack>
  
                <Chart
                  options={options}
                  series={MIXED_CHART}
                  type="line"
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
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 3, 3],
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
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
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    grid: {
      show: true,
      borderColor: "#E3E7EA",
      strokeDashArray: 10,
      position: "back",
    },
    colors: ["#FF4545", "#FFB83F", "#00B9ED"],
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
                <Typography variant="h4">Mixed Charts</Typography>
                <ChartDropdown />
              </Stack>

              <Chart
                options={options}
                series={MIXED_CHART}
                type="line"
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
