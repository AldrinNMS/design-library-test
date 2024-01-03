import {Grid, Paper, Typography} from "@mui/material";
import React, {Fragment} from "react";
import {BasicLineChart} from "../AdminPages/Components/BasicLineChart";
import {ColumnChart} from "../AdminPages/Components/ColumnChart";
import {MixedChart} from "../AdminPages/Components/MixedChart";
import {PieChart} from "../AdminPages/Components/PieChart";
import {RadialBar} from "../AdminPages/Components/RadialBar";

import {SplineChart} from "../AdminPages/Components/SplineChart";
import {StackedColumn} from "../AdminPages/Components/StackedColumn";

export const SampleChart = () => {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item desktop={12}>
          <SplineChart />
        </Grid>
        <Grid item desktop={12}>
          <BasicLineChart />
        </Grid>
        <Grid item desktop={12}>
          <ColumnChart />
        </Grid>
        <Grid item desktop={12}>
          <StackedColumn />
        </Grid>
        <Grid item desktop={12}>
          <MixedChart />
        </Grid>
        <Grid item desktop={12}>
          <PieChart />
        </Grid>
        <Grid item desktop={12}>
          <RadialBar />
        </Grid>
      </Grid>
    </Fragment>
  );
};
