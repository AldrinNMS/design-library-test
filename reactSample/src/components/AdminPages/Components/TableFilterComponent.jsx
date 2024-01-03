
import { Accordion, AccordionSummary, Paper, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { FILTER_LIST } from "../../../config/data";
import { DropdownIcon } from "../../SVGComponents";

export const DesktopAccountManagementFilter = () => {
  const [expanded, setExpanded] = useState(false);

  const [value, setValue] = useState();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setValue(event.target.value);
  };

  return (
    <Fragment>
      <Paper elevation={1}>
        {FILTER_LIST.map((item, id) => (
          <Accordion
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
            key={id}
          >
            <AccordionSummary
              expandIcon={<DropdownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">{item.label}</Typography>
            </AccordionSummary>
          </Accordion>
        ))}
      </Paper>
    </Fragment>
  );
};
