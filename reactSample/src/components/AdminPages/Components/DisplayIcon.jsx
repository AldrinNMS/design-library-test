import {Card, Grid, Paper, Stack, Typography} from "@mui/material";
import React, {Fragment} from "react";
import {
  ChatRound,
  ChatRoundDots,
  ChatRoundLine,
  Feedback,
  MessageDialog,
} from "../../SVGComponents";

export const DisplayIcon = () => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item desktop={6}>
          <Card>
            <Typography variant="h3">Messages,Conversation</Typography>
            <Stack direction="row" spacing={2}>
              <ChatRoundDots />
              <MessageDialog />
              <ChatRoundLine />
              <ChatRound />
              <Feedback />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};
