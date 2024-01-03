import React, {Fragment} from "react";
import {InfoRounded} from "@mui/icons-material";
import {TextField, Tooltip} from "@mui/material";
export const FormikTextField = (props) => {
  const {
    variant = "outlined",
    fieldchange,
    field,
    fieldval,
    title = "",
    type = "text",
    select = false,
    multiline = false,
    err = false,
    helpertxt = "",
    children,
    icon,
    message,
    readOnly = false,
    size = "large",
    onChangeData,
    maximumLength = 200,
    minimumLength = 0,
    rows = 8,
  } = props;

  return (
    <TextField
      size={size}
      placeholder={title}
      variant={variant}
      select={select}
      multiline={multiline}
      rows={rows}
      onChange={(event) => {
        const newValue = event.target.value;
        if (typeof onChangeData === "function") onChangeData(newValue);
        if (typeof fieldchange === "function") fieldchange(newValue, field);
      }}
      type={type}
      error={err}
      helperText={helpertxt}
      value={fieldval}
      {...props}
      SelectProps={{IconComponent: () => null}}
      inputProps={{
        maxLength: maximumLength,
        minLength: minimumLength,
      }}
      InputProps={{
        style: {
          fontWeight: readOnly ? 700 : 400,
        },
        readOnly: readOnly,
        disableUnderline: true,
        startAdornment: icon ? icon : "",
        endAdornment: message ? (
          <Fragment>
            <Tooltip title={message}>
              <InfoRounded sx={{cursor: "pointer"}} color="info" />
            </Tooltip>
          </Fragment>
        ) : (
          ""
        ),
      }}
    >
      {children}
    </TextField>
  );
};
