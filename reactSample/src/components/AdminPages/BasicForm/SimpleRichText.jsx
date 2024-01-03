import {Button, Paper, Typography} from "@mui/material";
import React, {Fragment, useState} from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import {CustRichText} from "../../GenericComponents/GeneralComponents/CustRichText";

export const SimpleRichText = () => {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <CustRichText value={value} onChange={setValue}></CustRichText>
    </Fragment>
  );
};
