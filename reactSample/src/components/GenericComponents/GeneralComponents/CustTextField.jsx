import React from "react";
import {IconButton, Paper, TextField, Tooltip} from "@mui/material";
import {Clear, Search} from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../quill.css";

export const RichTextArea = (props) => {
  const {value, onChange, children} = props;
  return (
    <Paper sx={{borderRadius: "0.5em"}}>
      <ReactQuill theme="snow" value={value} onChange={onChange} />
      {children}
    </Paper>
  );
};

export const SearchTextField = (props) => {
  const {
    placeholder = "Search",
    value,
    onChange,
    clearSearch,
    ...others
  } = props;
  return (
    <TextField
      {...others}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus
      InputProps={{
        endAdornment:
          value == "" ? (
            <Search />
          ) : (
            <Tooltip title={"Clear"}>
              <IconButton
                title="Clear"
                size="medium"
                onClick={clearSearch}
                color="primary"
              >
                <Clear />
              </IconButton>
            </Tooltip>
          ),
      }}
    />
  );
};
