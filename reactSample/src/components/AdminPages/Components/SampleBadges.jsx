import {Badge, Stack, Typography} from "@mui/material";
import React, {Fragment} from "react";
import {ChatRoundDots, Feedback} from "../../SVGComponents";

export const SampleBadges = () => {
  return (
    <Fragment>
      <Typography variant="h4">Badges</Typography>

      <Stack direction="row" spacing={4}>
        <Badge badgeContent={2} color="primary">
          <ChatRoundDots />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <Feedback />
        </Badge>
        <Badge badgeContent={4} color="tertiary">
          <Feedback />
        </Badge>
        <Badge badgeContent={4} color="quaternary">
          <Feedback />
        </Badge>
        <Badge badgeContent={4} color="info">
          <Feedback />
        </Badge>
        <Badge badgeContent={4} color="warning">
          <Feedback />
        </Badge>
        <Badge badgeContent={4} color="success">
          <Feedback />
        </Badge>
      </Stack>
    </Fragment>
  );
};
