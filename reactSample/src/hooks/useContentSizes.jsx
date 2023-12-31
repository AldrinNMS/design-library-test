import React, {useMemo} from "react";
import {useTheme} from "@mui/material";
import useWindowResize from "./useWindowSize";
import useStore from "../store/store";

export const useContentSizes = () => {
  const theme = useTheme();
  const {height, width} = useWindowResize();
  const [initialState] = useStore();

  const contentSizes = useMemo(() => {
    const uiSizesInt = {
      topBarHeight: parseInt(theme.props.topBarHeight),
      drawerOpenW: parseInt(theme.props.drawerWidthOpen),
      drawerW: parseInt(theme.props.drawerWidth),
    };
    const uiSizes = {
      contentHeight: height - (uiSizesInt.topBarHeight + 20),
      contentWidth:
        initialState.drawerMode == "open"
          ? width - uiSizesInt.drawerW - 27
          : width - uiSizesInt.drawerOpenW - 27,
      tableHeight: height - (uiSizesInt.topBarHeight + 62),
      tableWidth:
        width > theme.breakpoints.values.mobile
          ? initialState.drawerMode == "open"
            ? width - (uiSizesInt.drawerW + 58)
            : width - (uiSizesInt.drawerOpenW + 60)
          : "100%",
    };
    return uiSizes;
  }, [width, height, theme, initialState.drawerMode]);
  return {
    contentSizes,
  };
};
