import React, {Fragment, useState, useEffect} from "react";
import {Paper, Typography, Stack} from "@mui/material";
import Chart from "react-apexcharts";
import ChartDropdown from "../../GenericComponents/GeneralComponents/DropdownBtn";
import {CHART_DATA} from "../../../config/data";

const SplineChart = () => {
  const [selectedOption, setSelectedOption] = useState("YEAR");
  const [filteredData, setFilteredData] = useState(CHART_DATA);

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

  useEffect(() => {
    filterData();
  }, [selectedOption]);

  const filterData = () => {
    let filtered = CHART_DATA.map((series) => {
      return {
        name: series.name,
        data: {
          categoryName: series.data.categoryName,
          dataPlot: series.data.dataPlot.filter((dataPoint) =>
            filterByOption(dataPoint.categoryName)
          ),
        },
      };
    });

    setFilteredData(filtered);
  };

  const filterByOption = (categoryName) => {
    if (selectedOption === "YEAR") {
      // Example: Filter data for the category 'Text1' for the year option
      return categoryName.includes("Text1");
    } else if (selectedOption === "MONTH") {
      // Example: Filter data for the category 'Text2' for the month option
      return categoryName.includes("Text2");
    }
    // Add more conditions for other options if needed

    return true; // No filtering for other options
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography variant="h4">Area Chart</Typography>
          <ChartDropdown onDropdownChange={handleDropdownChange} />
        </Stack>

        <Chart
          options={options}
          series={filteredData}
          type="area"
          height={350}
        />
      </Paper>
    </Fragment>
  );
};

export default SplineChart;
