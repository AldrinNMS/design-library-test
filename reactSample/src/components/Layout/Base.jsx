import { useTheme } from "@emotion/react";
import { AppBar, GlobalStyles, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useTransition } from "react";
import { useStyles } from "../../hooks/useStyles";
import useWindowResize from "../../hooks/useWindowSize";
import { useContentSizes } from "../../hooks/useContentSizes";

const Base = () => {
  const { height, width } = useWindowResize();
  const theme = useTheme();
  const [{ showTransition }] = useTransition();
  const { classes } = useStyles();
  const [initialState, actions] = useStore();
  const { contentSizes } = useContentSizes();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHoverIn = () => {
    if (initialState.drawerMode == "close") {
      actions.setDrawerMode("hovered");
    }
  };

  const handleToggleMobileDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const handlHoverOut = () => {
    if (initialState.drawerMode == "hovered") {
      actions.setDrawerMode("close");
    }
  };

  useEffect(() => {
    const desktop = theme.breakpoints.values.desktop;
    const laptop = theme.breakpoints.values.laptop;
    const tablet = theme.breakpoints.values.tablet;
    actions.setDesktopMode(width > 800);
    actions.setContentBoxHeight(height);
    var breakpoint = "desktop";
    if (width > desktop) {
      breakpoint = "largeDesktop";
    } else if (width >= laptop && width < desktop) {
      breakpoint = "laptop";
    } else if (width >= tablet && width < laptop) {
      breakpoint = "tablet";
    } else if (width < tablet) {
      breakpoint = "mobile";
    }
    actions.setCurrentBreakPoint(breakpoint);
  }, [height, width, theme, initialState.drawerMode]);

  return (
    <Box height="100vh" sx={{ overflowY: "hidden" }}>
      <GlobalStyles
        styles={{
          ...classes.global,
        }}
      />
      <AppBar>
        <Toolbar
          disableGutters={true}
          sx={{
            ...classes.topBar,
          }}
        >
          <AppBarContent
            mobileOpen={mobileOpen}
            handleToggleMobileDrawer={handleToggleMobileDrawer}
            initialWidth={width}
          />
        </Toolbar>
      </AppBar>

      {/* nms drawer here */}
    </Box>
  );
};

export default Base;
