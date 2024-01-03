import {Avatar, AvatarGroup, Grid, Typography} from "@mui/material";
import React, {Fragment} from "react";

export const SampleAvatarGroup = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item>
          <Typography variant="h4"> Avatar</Typography>
          <AvatarGroup total={20}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
        </Grid>
      </Grid>
    </Fragment>
  );
};
