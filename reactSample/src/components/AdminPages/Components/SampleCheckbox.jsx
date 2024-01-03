import React, {Fragment, useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Stack} from "@mui/material";

const SampleCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Fragment>
      <Stack direction="row" spacing={1}>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label="wow checkbox"
        />
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label="wow"
        />
      </Stack>
    </Fragment>
  );
};

export default SampleCheckbox;
