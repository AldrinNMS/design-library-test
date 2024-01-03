import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {Typography} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {lightTheme} from "../../../config/theme";

const CustSnackbar = React.forwardRef(({message, onClose, severity}, ref) => {
  const autoHideDuration = 5000;
  const anchorOrigin = {
    vertical: "bottom",
    horizontal: "left",
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Snackbar
        open={true}
        onClose={onClose}
        autoHideDuration={autoHideDuration}
        ref={ref}
        anchorOrigin={anchorOrigin}
      >
        <Alert onClose={onClose} severity={severity}>
          <Typography>{message}</Typography>
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
});

export default CustSnackbar;
