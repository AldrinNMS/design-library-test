import {ListItemIcon, ListItemText} from "@mui/material";
import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {useUIStore} from "../../../store/store";
import {CustListItem} from "../GeneralComponents/CustListItem";

export const NavItem = (props) => {
  const [{drawerMode, currentBreakPoint}] = useUIStore();
  const {listKey, title, path, linkIcn, activeNav = false} = props;
  return (
    <CustListItem
      key={listKey}
      component={NavLink}
      to={path}
      selected={activeNav}
      sx={{
        "&.Mui-selected": {
          backgroundColor:
            drawerMode == "close" &&
            currentBreakPoint != "mobile" &&
            "transparent",
        },
      }}
    >
      {linkIcn ? (
        <ListItemIcon
          sx={{
            marginLeft: "60px",
            bgcolor:
              activeNav &&
              drawerMode == "close" &&
              currentBreakPoint != "mobile" &&
              "primary.main",
            borderRadius: 10,
            transition: "0.5s",
          }}
        >
          {linkIcn}
        </ListItemIcon>
      ) : (
        <Fragment />
      )}
      <ListItemText primary={title} />
    </CustListItem>
  );
};
