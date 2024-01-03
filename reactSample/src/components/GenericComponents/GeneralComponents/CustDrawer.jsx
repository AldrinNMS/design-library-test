import {Drawer} from "@mui/material";
import React, {Fragment} from "react";

const openedMixin = (theme) => ({
  width: theme.props.drawerWidth,
  transition: theme.transitions.create("witdth", {
    easing: theme.transitions.easing.sharp,
    duartion: theme.transition.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easinh.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.props.drawerWidthOpen,
});

const hoveredMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme,
  }),
});

export const CustDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open, hovered}) => {
  return {
    ".MuiPaper-root": {
      marginTop: theme.props.topBarHeight,
      borderColor: "black",
    },
    width: theme.props.topBarHeight,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
    ...(hovered == "true" && {
      "& .MuiDrawer-paper": hoveredMixin(theme),
    }),
  };
});
