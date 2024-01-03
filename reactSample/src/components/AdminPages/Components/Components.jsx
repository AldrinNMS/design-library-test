import { CheckBox, WebAssetRounded } from "@mui/icons-material";
import { Box, Button, Dialog, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Fragment } from "react";
import { Buttons } from "./Buttons";
import { Dialogs } from "./Dialogs";
import { SampleAvatarGroup } from "./SampleAvatarGroup";
import { SampleBadges } from "./SampleBadges";
import SampleCheckbox from "./SampleCheckbox";
import { SampleChips } from "./SampleChips";
import { SampleSwitch } from "./SampleSwitch";
import { Snackbars } from "./Snackbars";
import { TextFields } from "./TextFields";

export const Components = () => {
  return (
    <Fragment>
      <Typography>Components</Typography>
      <Stack spacing={3}>
        <Buttons />
        <SampleChips />
        <Dialogs />
        <Snackbars />
        <TextFields />
        <SampleCheckbox />
        <SampleSwitch />
        <SampleBadges />
        <SampleAvatarGroup />
      </Stack>
    </Fragment>
  );
};
