import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, {Fragment} from "react";
import {
  CustCard,
  CustCardTransp,
} from "../GenericComponents/GeneralComponents/CustCard";
import {Feedback} from "../SVGComponents";

export const DialogPage = () => {
  return (
    <Fragment>
      <Box columnGap={1} sx={{display: "flex", alignItems: "center"}}>
        <Feedback />
        <Typography variant="h5">Extras</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item desktop={12}>
          <Typography variant="h2">Dialog</Typography>
          <Typography variant="h5">
            The included dialogs encompass basic, alert, and form dialogs.
            Additionally, these dialogs are designed to be fully responsive and
            are equipped to accommodate long content through scrolling (paper).
          </Typography>
        </Grid>

        <Grid item desktop={12}>
          <Box>
            <Link>https://mui.com/material-ui/react-dialog/</Link>
          </Box>
        </Grid>

        <Grid item desktop={4}>
          <CustCard>
            <Typography variant="h3" sx={{mb: "24px"}}>
              Basic
            </Typography>
            <Button>OPEN BASIC DIALOG</Button>
          </CustCard>
        </Grid>
        <Grid item desktop={4}>
          <CustCard>
            <Typography variant="h3" sx={{mb: "24px"}}>
              Alert Dialog
            </Typography>
            <Button>OPEN ALERT DIALOG</Button>
          </CustCard>
        </Grid>
        <Grid item desktop={4}>
          <CustCard>
            <Typography variant="h3" sx={{mb: "24px"}}>
              Form Dialog
            </Typography>
            <Button>OPEN FORM DIALOG</Button>
          </CustCard>
        </Grid>
        <Grid item desktop={4}>
          <CustCard>
            <Typography variant="h3" sx={{mb: "24px"}}>
              Set Backup Account
            </Typography>
            <Stack spacing={2}>
              <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                <Avatar />
                <Typography variant="h6">username@gmail.com</Typography>
              </Box>
              <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                <Avatar />
                <Typography variant="h6">username@gmail.com</Typography>
              </Box>
              <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                <Avatar />
                <Typography variant="h6">Add Account</Typography>
              </Box>
            </Stack>
          </CustCard>
        </Grid>
      </Grid>
    </Fragment>
  );
};
