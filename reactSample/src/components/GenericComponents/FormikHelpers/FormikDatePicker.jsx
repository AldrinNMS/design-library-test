import React, {useEffect, useState} from "react";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {parseISO} from "date-fns";
import {TextField} from "@mui/material";
import {DATEFORMAT} from "../../../config/enums";
import {formatTime} from "../../Helpers/dateTimeHelper";

let date = new Date();

export const FormikDatePicker = (props) => {
  const {
    variant = "outlined",
    field = "",
    views,
    opento = "day",
    fieldchange,
    minYear = date.getFullYear() - 1,
    maxYear = date.getFullYear() + 6,
    format = DATEFORMAT.DATE,
    fieldval,
    err = false,
    helpertxt = "",
    disableMask = true,
    readOnly = false,
    size = "large",
    ...others
  } = props;

  const [selectedDate, setDateChange] = useState(fieldval || new Date());

  let minDate = parseISO(minYear + "-01-01");
  let maxDate = parseISO(maxYear + "-12-31");

  const handleDateChange = (newValue) => {
    setDateChange(newValue);
    fieldchange(field, newValue);
  };

  useEffect(() => {
    setDateChange(fieldval);
  }, [fieldval]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        readOnly={readOnly}
        value={selectedDate}
        views={views}
        openTo={opento}
        inputFormat={format}
        onChange={handleDateChange}
        minDate={minDate}
        maxDate={maxDate}
        disableOpenPicker={readOnly ? true : false}
        InputProps={{
          disableUnderline: true,
          style: {
            fontWeight: readOnly ? 700 : 400,
          },
        }}
        disableMaskedInput={disableMask}
        {...others}
        renderInput={(props) => (
          <TextField
            variant={variant}
            {...props}
            fullWidth
            error={err}
            helperText={helpertxt}
            
          />
        )}
      />
    </LocalizationProvider>
  );
};

export const FormikTimePicker = (props) => {
  const {
    title,
    field = "",
    onChangeData,
    fieldchange,
    fieldval,
    err = false,
    stringFormat = DATEFORMAT.TIME,
    helpertxt = "",
    disableMask = true,
    manual = true,
    format = DATEFORMAT.TIME,
    ...others
  } = props;

  const [selectedTime, setTimeChange] = useState(fieldval || new Date());

  const handleDateChange = (newValue) => {
    setTimeChange(newValue);
    if (typeof onChangeData === "function")
      onChangeData(formatTime(newValue, stringFormat));
    if (typeof fieldchange === "function") fieldchange(newValue, field);
  };

  useEffect(() => {
    if (!fieldval) return;
    if (manual) {
      setTimeChange(fieldval ? new Date(`1970-01-01 ${fieldval}`) : new Date());
    }
  }, [fieldval]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        inputFormat={format}
        value={selectedTime}
        onChange={handleDateChange}
        inputProps={{
          readOnly: true,
          placeholder: `${title}`,
        }}
        disableMaskedInput={disableMask}
        {...others}
        renderInput={(props) => (
          <TextField {...props} fullWidth error={err} helperText={helpertxt} />
        )}
      />
    </LocalizationProvider>
  );
};

export const FormikDateTimePicker = (props) => {
  const {
    variant = "outlined",
    fieldWidth,
    label,
    field = "",
    minDate,
    maxDate,
    fieldchange,
    format = DATEFORMAT.DATE_TIME,
    fieldval,
    err = false,
    helpertxt = "",
    disableMask = true,
    readOnly = false,
    ...others
  } = props;

  const [selectedDate, setDateChange] = useState(fieldval || new Date());

  const handleDateChange = (newValue) => {
    setDateChange(newValue);
    fieldchange(field, newValue);
  };

  useEffect(() => {
    setDateChange(fieldval);
  }, [fieldval]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        minDate={minDate}
        maxDate={maxDate}
        inputFormat={format}
        value={selectedDate}
        label={label}
        onChange={handleDateChange}
        readOnly={readOnly}
        disableMaskedInput={disableMask}
        {...others}
        renderInput={(props) => (
          <TextField
            variant={variant}
            {...props}
            error={err}
            helperText={helpertxt}
            sx={fieldWidth && {maxWidth: fieldWidth}}
          />
        )}
      />
    </LocalizationProvider>
  );
};
