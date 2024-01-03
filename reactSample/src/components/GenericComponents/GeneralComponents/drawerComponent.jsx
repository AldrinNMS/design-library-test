import { Drawer, Icon, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const drawerComponent = () => {
  return <div>drawerComponent</div>;
};

export const FilterDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      ></IconButton>
      {/* wala pa ung filter icon */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          ".MuiDrawer-paper": {
            borderRadius: "0px 20px 20px 0px",
            padding: "24px",
          },
        }}
      >
        <Box display={"flex"} justifyContent={"flex-end"}>
          <IconButton onClick={handleDrawerClose}>
            <ChatRound />
          </IconButton>
        </Box>


      </Drawer>
    </div>
  );
};
