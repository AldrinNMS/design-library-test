import React, {Fragment, useState} from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ChartDropdown = ({onDropdownChange}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("YEAR");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);

    onDropdownChange(option.toUpperCase(), "selected");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        onClick={handleClick}
        variant="contained"
        endIcon={<ArrowDropDownIcon />}
      >
        {selectedOption}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleOptionClick("YEAR")}>YEAR</MenuItem>
        <MenuItem onClick={() => handleOptionClick("MONTH")}>MONTH</MenuItem>
        <MenuItem onClick={() => handleOptionClick("DAY")}>DAY</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default ChartDropdown;
