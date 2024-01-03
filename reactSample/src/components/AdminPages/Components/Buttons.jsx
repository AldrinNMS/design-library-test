import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

export const Buttons = () => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item desktop={12}>
          <Typography variant="h2">Buttons</Typography>
          <Stack direction="row" spacing={1}>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="tertiary">Tertiary</Button>
            <Button color="quaternary">Quaternary</Button>
            <Button color="info">Info</Button>
            <Button color="warning">warning</Button>
            <Button color="error">error</Button>
            <Button color="success">success</Button>
          </Stack>
        </Grid>
        <Grid item desktop={12}>
          <Stack direction="row" spacing={1}>
            <Button color="primary" variant="outlined">
              Primary
            </Button>
            <Button color="secondary" variant="outlined">
              Secondary
            </Button>
            <Button color="tertiary" variant="outlined">
              Tertiary
            </Button>
            <Button color="quaternary" variant="outlined">
              Quaternary
            </Button>
            <Button color="info" variant="outlined">
              Info
            </Button>
            <Button color="warning" variant="outlined">
              warning
            </Button>
            <Button color="error" variant="outlined">
              error
            </Button>
            <Button color="success" variant="outlined">
              success
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};
