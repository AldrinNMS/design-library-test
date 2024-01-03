import {Box, Stack, Switch, Typography} from "@mui/material";
import React, {Fragment} from "react";

export const SampleSwitch = () => {
  return (
    <Fragment>
      <Box>
        <Typography variant="h4">Switch</Typography>
        <Stack direction="row" spacing={1}>
          <Switch />
          <Switch defaultChecked color="success" />
          <Switch disabled defaultChecked color="error" />
          <Switch color="info" defaultChecked />
          <Switch color="warning" defaultChecked />
        </Stack>
      </Box>
    </Fragment>
  );
};
