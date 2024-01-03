import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

export const SampleChips = () => {
  return (
    <Fragment>
      <Box>
        <Grid contained spacing={1}>
          <Grid item desktop={12}>
            <Typography variant="h4">Chips</Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Primary" variant="filled" color="success" />
              <Chip label="Secondary" variant="filled" color="error" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
