import {Grid, Paper, Stack, Typography} from "@mui/material";
import React, {Fragment} from "react";
import {TYPOGRAPHIES} from "../../config/data";
import PageHeadingComponent from "../GenericComponents/GeneralComponents/PageHeadingComponent";
import {BoxMinimalistic} from "../SVGComponents";

export const SampleTypo = () => {
  return (
    <Fragment>
      <PageHeadingComponent
        icon={<BoxMinimalistic />}
        subheading={"Foundation"}
        pageTitle={"Typography"}
        subheading2={
          "Lorem ipsum dolor sit amet consectetur. Urna dictum pulvinar a orci eu nunc diam in neque."
        }
        link={"https://mui.com/components/typography"}
      />
      <Grid container spacing={4}>
        <Grid item desktop={6}>
          <Typography variant="h4">Default Text</Typography>
        </Grid>
        <Grid item desktop={6}>
          {TYPOGRAPHIES.map((typo) => (
            <Stack
              key={typo.id}
              direction="column"
              sx={{paddingBottom: "48px"}}
            >
              <Paper>
                <Typography style={{fontSize: typo.fontSize}}>
                  {typo.text}
                </Typography>
                <Typography variant="description" color="quaternary">
                  {typo.subtext}
                </Typography>
              </Paper>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};
