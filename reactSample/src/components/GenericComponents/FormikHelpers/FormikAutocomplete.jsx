import React, {useEffect, useState} from "react";
import {Autocomplete, CircularProgress, TextField} from "@mui/material";
import {Fragment} from "react";
import {isBlank} from "../../Helpers/stringHelper";

export const FormikAutocomplete = (props) => {
  const {
    variant = "outlined",
    fieldchange,
    onChangeData,
    geoChangeData,
    onSelectedData,
    options = [],
    field,
    fieldval = "",
    fieldcompf = "id",
    fieldcomps = "id",
    title = "",
    dispname = "name",
    err = false,
    helpertxt = "",
    disableClearable,
    serverType = false,
    apiUrl = null,
    apiHeader = null,
    apiResultKey = null,
    loading = false,
    TextFieldProps = {},
    size = "large",
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [optionData, setOptionData] = useState(options ?? []);

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const result = await fetch(apiUrl, {...apiHeader, method: "GET"});
      if (result.ok) {
        const data = await result.json();
        const resultData = apiResultKey ? data[apiResultKey] : data;
        setOptionData(resultData ?? []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setOptionData(options);
  }, [options]);

  useEffect(() => {
    if (isBlank(apiUrl) && !serverType) return;
    fetchApi();
  }, [apiUrl, serverType, apiResultKey]);

  return (
    <Autocomplete
      options={optionData ?? []}
      value={fieldval}
      onChange={(option, newValue) => {
        const passValue = {};
        passValue[dispname] = newValue[dispname];
        if (typeof onSelectedData === "function") onSelectedData(newValue);
        if (typeof onChangeData === "function") onChangeData(passValue);
        if (typeof fieldchange === "function")
          fieldchange(newValue[fieldcomps], field);
        if (typeof geoChangeData === "function") geoChangeData(newValue);
      }}
      getOptionLabel={(option) => option?.[dispname] || ""}
      isOptionEqualToValue={(option, value) => {
        return option?.[fieldcompf] == value?.[fieldcomps];
      }}
      error={err}
      disableClearable={disableClearable}
      renderInput={(params) => (
        <TextField
          {...params}
          size={size}
          label={title}
          placeholder={title}
          error={err}
          helperText={helpertxt}
          variant={variant}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {isLoading || loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
          {...TextFieldProps}
        />
      )}
    />
  );
};
