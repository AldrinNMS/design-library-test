import React, {Fragment, useState} from "react";
import {Paper, Typography, Stack, Tab, Tabs, Box} from "@mui/material";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

export const CustTab = (props) => {
  const {tabContent, label1, label2, chartTab, syntaxTab} = props;

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Fragment>
      <Box marginBottom={2}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label={label1} />
          <Tab label={label2} />
        </Tabs>
      </Box>

      <TabPanel value={selectedTab} index={0}>
        {chartTab}
      </TabPanel>
       <TabPanel value={selectedTab} index={0}>
        {tabContent}
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        {syntaxTab}
      </TabPanel>
    </Fragment>
  );
};

const TabPanel = ({children, value, index}) => {
  return (
    <div hidden={value !== index} style={{width: "100%"}}>
      {value === index && <div>{children}</div>}
    </div>
  );
};
