import * as React from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {DeveloperBoard, MenuBook} from "@mui/icons-material";
import {Button} from "@mui/material";

const drawerWidth = 240;

export default function Sidebar({toggleDarkMode}) {
  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Button onClick={toggleDarkMode}>Mode</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
            <ListItemButton component={Link} to="/homepage">
              <ListItemIcon>
                <DeveloperBoard />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/typography">
              <ListItemIcon>
                <DeveloperBoard />
              </ListItemIcon>
              <ListItemText primary="Typography" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/components">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Components" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/basicForm">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="BasicForm" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/dialogPage">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="DialogPage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/richtext">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Richtext" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/icons">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Icons" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/dataGrid">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Data Grid" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/colors">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Sample Colors" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/charts">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Sample Charts" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/richText">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="RichText" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/codePage">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Code Page" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/dropzone">
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary="Dropzone" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          marginLeft: `-${drawerWidth}px`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
