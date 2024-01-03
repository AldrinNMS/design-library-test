import {Box, Paper, Typography} from "@mui/material";
import React, {Fragment} from "react";
import {PIE_CHART} from "../../../config/data";
import Chart from "react-apexcharts";
import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const PieChart = () => {
  const codeExample = `import {Paper, Typography} from "@mui/material";
    import React, {Fragment} from "react";
    import {PIE_CHART} from "../../../config/data";
    import Chart from "react-apexcharts";
    import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
    
    export const PieChart = () => {
      const options = {
        chart: {
          type: "pie",
          fontFamily: "Lato",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
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
          curve: "smooth",
        },
        colors: ["#00B9ED", "#FFB83F", "#454F5B", "#FF4545"],
      };
    
      return (
        <Fragment>
          <Paper elevation={1}>
            <CustTab
              label1={"Preview"}
              label2={"JSX"}
              chartTab={
                <Box>
                  <Typography variant="h4">Pie</Typography>
                  <Chart
                    options={options}
                    series={PIE_CHART}
                    type="pie"
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
      type: "pie",
      fontFamily: "Lato",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
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
      curve: "smooth",
    },
    colors: ["#00B9ED", "#FFB83F", "#454F5B", "#FF4545"],
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <CustTab
          label1={"Preview"}
          label2={"JSX"}
          chartTab={
            <Box>
              <Typography variant="h4">Pie</Typography>
              <Chart
                options={options}
                series={PIE_CHART}
                type="pie"
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
