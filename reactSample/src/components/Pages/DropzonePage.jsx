import {Paper, Stack, Typography} from "@mui/material";
import React, {Fragment} from "react";
import SingleUpload from "../GenericComponents/GeneralComponents/Dropzone";
import MultipleUploads from "../GenericComponents/GeneralComponents/MutipleUpload";

export const DropzonePage = () => {
  return (
    <Fragment>
      <Stack spacing={4}>
        <Paper>
          <Stack spacing={4}>
            <Typography variant="h4">Upload Single File</Typography>
            <SingleUpload />
          </Stack>
        </Paper>
        <Paper>
          <Stack spacing={4}>
            <Typography variant="h4">Upload Multiple Files</Typography>
            <MultipleUploads />
          </Stack>
        </Paper>
      </Stack>
    </Fragment>
  );
};
