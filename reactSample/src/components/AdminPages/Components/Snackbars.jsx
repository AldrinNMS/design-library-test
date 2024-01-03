import Snackbar from "@mui/material/Snackbar";
import {Button} from "@mui/material";
import {Grid, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import {useSnackbar} from "notistack";
import React, {Fragment} from "react";
import CustSnackbar from "../../GenericComponents/GeneralComponents/CustSnackbar";

export const Snackbars = () => {
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();

  const handleClick = (snackbarMessage, severity) => {
    const snackbarKey = enqueueSnackbar("", {
      content: (key, message, options) => (
        <CustSnackbar
          key={key}
          message={snackbarMessage}
          onClose={() => closeSnackbar(snackbarKey)}
          severity={severity}
        />
      ),
      variant: severity,
      persist: true,
    });
  };

  return (
    <Fragment>
      <Typography variant="h4">Snackbars</Typography>
      <Grid container spacing={1}>
        <Grid item desktop={12}>
          <Stack direction="row" spacing={1}>
            <Button
              color="success"
              onClick={() => handleClick("Success message", "success")}
            >
              Success
            </Button>
            <Button
              color="error"
              onClick={() => handleClick("Error message", "error")}
            >
              Error
            </Button>
            <Button
              color="info"
              onClick={() => handleClick("Info message", "info")}
            >
              Info
            </Button>
            <Button
              color="warning"
              onClick={() => handleClick("Warning message", "warning")}
            >
              Warning
            </Button>
            {/* <Button
              color="quaternary"
              onClick={() => handleClick("Default message", "default")}
            >
              Default
            </Button> */}
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};
