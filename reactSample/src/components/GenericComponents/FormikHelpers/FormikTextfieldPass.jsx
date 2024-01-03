import React, {useState} from "react";
import {InfoRounded, Visibility, VisibilityOff} from "@mui/icons-material";
import {IconButton, InputAdornment, TextField, Tooltip} from "@mui/material";
import {ClosedEyes, OpenEyes} from "../../SVGComponents";
export const FormikTextfieldPass = (props) => {
  const {
    variant = "outlined",
    fieldchange,
    field,
    fieldval = "",
    title = "",
    err = false,
    helpertxt = "",
    size = "large",
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <TextField
      size={size}
      placeholder={title}
      variant={variant}
      onChange={(event) => fieldchange(event.target.value, field)}
      type={showPassword ? "text" : "password"}
      fullWidth={true}
      error={err}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{display: "flex", gap: 1}}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => handleClickShowPassword()}
              edge="end"
            >
              {showPassword ? <ClosedEyes /> : <OpenEyes />}
            </IconButton>
            {props?.message && (
              <Tooltip title={props?.message}>
                <InfoRounded sx={{cursor: "pointer"}} color="info" />
              </Tooltip>
            )}
          </InputAdornment>
        ),
      }}
      helperText={helpertxt}
      value={fieldval}
      {...props}
    />
  );
};
