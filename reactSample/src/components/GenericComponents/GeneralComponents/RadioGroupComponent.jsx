import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {useState} from "react";

export const OrderFilter = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-redio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="ascending"
          control={<Radio />}
          label="Ascending"
        />
        <FormControlLabel
          value="descending"
          control={<Radio />}
          label="Descending"
        />
      </RadioGroup>
    </FormControl>
  );
};
