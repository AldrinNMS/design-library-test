import { React, Fragment, useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";

import HomepageAvatar from "/images/HomeAvatar.png";
import { BANNERS, PLATFORM_CARDS } from "../../config/data";
import { BoxMinimalistic } from "../SVGComponents";
import PageHeadingComponent from "../GenericComponents/GeneralComponents/PageHeadingComponent";

export const CardPage = () => {
  return (
    <Fragment>
      <PageHeadingComponent
        icon={<BoxMinimalistic />}
        subheading={"Foundation"}
        pageTitle={"Card"}
        subheading2={
          "Cards contain content and actions about a single subject."
        }
        link={"https://mui.com/material-ui/react-card/"}
      />
      <Stack spacing={4}>
        <Paper elevation={1}>
          <Typography variant="h4">Banner Card</Typography>
          {BANNERS.map((banner) => (
            <Paper
              key={banner.id}
              sx={{
                borderRadius: 5,
                backgroundImage: `url("${banner.bannerImage}")`,
                display: "flex",
                backgroundSize: "cover",
                flexDirection: "column",
                maxWidth: "100%",
                height: 250,
                marginBottom: "48px",
              }}
            >
              <Stack direction="row" spacing={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={HomepageAvatar}
                    sx={{ width: "130px", height: "130px" }}
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Stack direction="column">
                    <Typography variant="h3l" color="white">
                      {banner.greeting}
                    </Typography>
                    <Typography variant="h3" color="white">
                      John Doe
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          ))}

        </Paper>
        <Paper elevation={1}>
          <Typography variant="h4">
            Clickable Card
          </Typography>
          <Grid container spacing={1}>
            {PLATFORM_CARDS.map((card) => (
              <Grid item desktop={6}>
                <Paper
                  key={card.id}
                  sx={{
                    borderRadius: 5,
                    backgroundImage: `url("${card.cardImage}")`,
                    display: "flex",
                    backgroundSize: "cover",

                    height: 250,
                    marginBottom: "48px",
                  }}
                >
                  <Stack direction="row">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Stack>
                        <Typography variant="h6" color="white">
                          {card.desc}
                        </Typography>
                        <Typography variant="h3l" color="white">
                          {card.title}
                        </Typography>
                      </Stack>
                    </Box>

                    <Box sx={{ justifyItems: "end" }}>{card.cardIcon}</Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Stack>

    </Fragment>
  )
}
