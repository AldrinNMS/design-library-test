import {
  Collapse,
  List,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import {Box} from "@mui/system";
import React, {useState} from "react";
import {Fragment} from "react";
import {useLocation} from "react-router-dom";
import {PAGELIST} from "../../../config/pageList";
import {PAGESECTION} from "../../../config/pagesSection";
import {useUIStore} from "../../../store/store";
import {useStyles} from "../../../hooks/useStyles";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {NavItem} from "./NavItem";

const getGroupSection = (sect) => {
  const filteredPage = [...PAGELIST] ?? [];
  return filteredPage.filter((data) => data.section == sect);
};

export const SideBarNavHelpers = () => {
  const [openNested, setOpenNested] = useState("");
  const [{drawerMode}] = useUIStore();
  const {classes} = useStyles();
  const {pathname} = useLocation();

  const handleNestedChange = (group) => {
    setOpenNested((prev) => (prev == group ? "" : group));
  };

  return (
    <Fragment>
      {PAGESECTION.map((psd, oidx) => {
        return (
          <Fragment key={oidx}>
            <List
              sx={classes.sideBarList}
              subheader={
                <Fragment>
                  {drawerMode == "close" ? (
                    <Divider
                      variant="middle"
                      sx={classes.subheadDivider}
                      flexItem
                    />
                  ) : (
                    <ListSubheader id="nested-list-subheader">
                      <Typography sx={{fontSize: "12px"}}>
                        {psd.title}
                      </Typography>
                    </ListSubheader>
                  )}
                </Fragment>
              }
            >
              {getGroupSection(psd.section)?.map((page, iidx) => {
                if (page?.groupBy != undefined) {
                  return (
                    <Fragment key={`${page.key}-${iidx}-${oidx}`}>
                      {page?.main ? (
                        <CustListItem
                          onClick={() => handleNestedChange(page.groupBy)}
                        >
                          <ListItemText primary={page.title} />
                          {openNested === page.groupBy ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </CustListItem>
                      ) : (
                        <Fragment />
                      )}
                      <Collapse
                        in={openNested === page.groupBy}
                        timeout="auto"
                        unmountOnExit
                        mountOnEnter
                      >
                        <List
                          disablePadding
                          sx={{
                            ".MuiListItemIcon-root": {},
                          }}
                        >
                          {!page?.main ? (
                            <NavItem
                              listKey={`${page.key}-${iidx}`}
                              title={page.title}
                              path={page.path}
                              activeNav={pathname == page.path}
                            />
                          ) : (
                            <Fragment />
                          )}
                        </List>
                      </Collapse>
                    </Fragment>
                  );
                } else {
                  return (
                    <Fragment key={`${page.key}-${iidx}`}>
                      <NavItem
                        listKey={`${page.key}-${iidx}`}
                        title={page.title}
                        path={page.path}
                        activeNav={pathname == page.path}
                      />
                    </Fragment>
                  );
                }
              })}
            </List>
          </Fragment>
        );
      })}
    </Fragment>
  );
};
