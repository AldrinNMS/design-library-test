import {Grid, Typography} from "@mui/material";
import {useFormik} from "formik";
import React, {Fragment, useState} from "react";
import {FormikAutocomplete} from "../../GenericComponents/FormikHelpers/FormikAutocomplete";
import {FormikTextField} from "../../GenericComponents/FormikHelpers/FormikTextfield";
import {SearchTextField} from "../../GenericComponents/GeneralComponents/CustTextField";
import {NAMES} from "../../../config/enums";
import {PersonOutlineRounded} from "@mui/icons-material";
import {FormikTextfieldPass} from "../../GenericComponents/FormikHelpers/FormikTextfieldPass";

export const TextFields = () => {
  const [userSearchText, setUserSearchText] = useState("");
  const [value, setValue] = useState("");

  const formik = useFormik({
    initialValues: {
      readOnly: "Read Only",
      firstName: "",
      lastName: "",
      email: "",
      middleName: "",
    },
  });
  return (
    <Fragment>
      {/* <Typography variant="h4">TextFields</Typography> */}
      <Grid container spacing={1}>
        <Grid item desktop={3}>
          <FormikTextField
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"readOnly"}
            fieldval={formik.values.readOnly}
            err={formik.errors?.readOnly ? true : false}
            helpertxt={formik.errors?.readOnly}
            label={"Read Only"}
            readOnly={true}
          />
        </Grid>
        <Grid item desktop={3}>
          <SearchTextField
            placeholder={"Search"}
            value={userSearchText}
            onChange={(e) => setUserSearchText(e.target.value)}
            clearSearch={() => setUserSearchText("")}
          />
        </Grid>
        <Grid item desktop={3}>
          <FormikAutocomplete
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            options={NAMES ?? []}
            field={"Names"}
            fieldval={formik.values.names}
            fieldcompf={"id"}
            fieldcomps={"id"}
            title={"Names"}
            disableClearable={true}
            dispname={"name"}
            err={formik.errors?.names ? true : false}
            helpertxt={formik.errors?.names}
          />
        </Grid>
        <Grid item desktop={3}>
          <FormikTextField
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"iconText"}
            fieldval={formik.values.iconText}
            err={formik.errors?.iconText ? true : false}
            helpertxt={formik.errors?.iconText}
            placeholder={"Username"}
            icon={<PersonOutlineRounded />}
          />
        </Grid>
        <Grid item desktop={3}>
          <FormikTextfieldPass
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"password"}
            fieldval={formik.values.password}
            err={formik.errors?.password ? true : false}
            helpertxt={formik.errors?.password}
            placeholder={"Password"}
          />
        </Grid>
        {/* <Grid item desktop={3}>
          <FormikDatePicker />
        </Grid> */}
      </Grid>
    </Fragment>
  );
};
