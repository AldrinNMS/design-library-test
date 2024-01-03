import {Stack} from "@mui/system";
import React, {Fragment} from "react";
import {
  FullRichText,
  SimpleRichText,
} from "../GenericComponents/GeneralComponents/CustRichText";

export const Richtext = () => {
  return (
    <Fragment>
      <Stack spacing={8}>
        <SimpleRichText />
        <FullRichText />
      </Stack>
    </Fragment>
  );
};
