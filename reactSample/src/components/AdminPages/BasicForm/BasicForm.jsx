import {
  Box,
  FormControlLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {useFormik} from "formik";
import React, {Fragment, useState} from "react";
import {FormikAutocomplete} from "../../GenericComponents/FormikHelpers/FormikAutocomplete";
import {FormikTextField} from "../../GenericComponents/FormikHelpers/FormikTextfield";
import {SearchTextField} from "../../GenericComponents/GeneralComponents/CustTextField";
import {COUNTRY, DEPARTMENTS, NAMES} from "../../../config/enums";
import {PersonOutlineRounded} from "@mui/icons-material";
import {FormikTextfieldPass} from "../../GenericComponents/FormikHelpers/FormikTextfieldPass";
import {HandStars} from "../../SVGComponents";
import {FormikDatePicker} from "../../GenericComponents/FormikHelpers/FormikDatePicker";

export const BasicForm = () => {
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
      <Box columnGap={1} sx={{display: "flex", alignItems: "center"}}>
        <HandStars />
        <Typography variant="h5">Extras</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item desktop={12}>
          <Typography variant="h2">Form Validation</Typography>
          <Typography variant="h5">
            The form validation utilizes Formik and Yup for validation purposes.
            Furthermore, it is designed to be responsive.
          </Typography>
        </Grid>

        <Grid item desktop={12}>
          <Box>
            <Link>https://formik.org/docs/overview</Link>
          </Box>
          <Box>
            <Link>https://www.npmjs.com/package/yup</Link>
          </Box>
        </Grid>

        <Grid item desktop={6}>
          <FormikTextField
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"firstname"}
            fieldval={formik.values.basicText}
            err={formik.errors?.basicText ? true : false}
            helpertxt={formik.errors?.basicText}
            label={"First Name"}
          />
        </Grid>
        <Grid item desktop={6}>
          <FormikTextField
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"lastName"}
            fieldval={formik.values.basicText}
            label={"Last Name"}
          />
        </Grid>
        <Grid item desktop={6}>
          <FormikTextField
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"emailAdress"}
            fieldval={formik.values.basicText}
            label={"Email Address"}
          />
        </Grid>
        <Grid item desktop={6}>
          <FormikTextfieldPass
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"password"}
            fieldval={formik.values.password}
            err={formik.errors?.password ? true : false}
            helpertxt={formik.errors?.password}
            placeholder={"Password"}
          />
        </Grid>
        <Grid item desktop={6}>
          {/* temporary */}
          <FormikTextField
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            field={"Date"}
            fieldval={formik.values.basicText}
            err={formik.errors?.basicText ? true : false}
            helpertxt={formik.errors?.basicText}
            label={"Date"}
          />
        </Grid>

        <Grid item desktop={6}>
          <FormikAutocomplete
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            options={COUNTRY ?? []}
            field={"countryName"}
            fieldval={formik.values.country}
            fieldcompf={"id"}
            fieldcomps={"id"}
            title={"Country"}
            disableClearable={true}
            dispname={"countryName"}
            err={formik.errors?.country ? true : false}
            helpertxt={formik.errors?.country}
          />
        </Grid>
        <Grid item desktop={12}>
          <FormikAutocomplete
            fieldchange={(field, value) => formik.setFieldValue(field, value)}
            options={DEPARTMENTS ?? []}
            field={"department"}
            fieldval={formik.values.department}
            fieldcompf={"id"}
            fieldcomps={"id"}
            title={"Department"}
            disableClearable={true}
            dispname={"name"}
            err={formik.errors?.department ? true : false}
            helpertxt={formik.errors?.department}
          />
        </Grid>
        <Grid item desktop={12}>
          <Typography>Gender</Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="male"
              control={<Radio color="info" />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="info" />}
              label="Female"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Fragment>
  );
};
