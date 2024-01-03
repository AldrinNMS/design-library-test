import {CloseRounded} from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Fade,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
export const CustDialog = (props) => {
  const {
    children,
    title,
    close,
    icon,
    isOpen,
    actions,
    size,
    loading,
    ...others
  } = props;
  return (
    <Dialog open={isOpen} onClose={close} {...others} maxWidth={size}>
      <Grid container alignItems="center">
        <Grid container item mobile={11}>
          <Grid item sx={{display: "flex", alignItems: "center"}}>
            {icon}
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              sx={{ml: 1, verticalAlign: "middle", display: "inline-flex"}}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item mobile={1} justifyContent="flex-end">
          <IconButton onClick={close}>
            <CloseRounded />
          </IconButton>
        </Grid>
      </Grid>
      <Box height={"5px"}>
        <Fade in={loading} unmountOnExit>
          <LinearProgress />
        </Fade>
      </Box>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};
