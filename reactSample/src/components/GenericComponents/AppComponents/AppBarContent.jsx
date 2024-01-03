import React, {Fragment} from "react";
import {IconButton, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {AppBarOptions} from "./AppBarOptions";

const AppBarContent = () => {
  return (
    <Fragment>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{marginRight: "10px", width: "100vw"}}
      >
        {/* <IconButton
              onClick={handleToggleMobileDrawer}
              edge="start"
              sx={{ml: 1, display: {mobile: "block", tablet: "none"}}}
            >
              <Menu />
            </IconButton> */}
        {/* <NmsIcon
              sx={{fontSize: "60px", cursor: "pointer"}}
              onClick={() => setDrawerMode(drawerMode == "open" ? "close" : "open")}
            /> */}
        <Typography>Sample</Typography>
        <Box flexGrow={1} />
        <AppBarOptions />
      </Stack>
    </Fragment>
  );
};

export default AppBarContent;
