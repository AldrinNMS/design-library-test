import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import {
  PRIMARY_COLORS,
  SECONDARY_COLORS,
  INFO_COLORS,
  SUCCESS_COLORS,
  WARNING_COLORS,
  DANGER_COLORS,
  NEUTRAL_COLORS,
} from "../../config/data";
import PageHeadingComponent from "../GenericComponents/GeneralComponents/PageHeadingComponent";
import { BoxMinimalistic } from "../SVGComponents";
import CopyToClipboard from "react-copy-to-clipboard";
import CustSnackbar from "../GenericComponents/GeneralComponents/CustSnackbar";

export const SampleColors = () => {
  const [copiedColor, setCopiedColor] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  const handleCopy = (color) => {
    setCopiedColor(color);
    setSnackbarMessage(`Copied: ${color}`);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Fragment>
      <PageHeadingComponent
        icon={<BoxMinimalistic />}
        subheading={"Foundation"}
        pageTitle={"Colors"}
        subheading2={
          "Lorem ipsum dolor sit amet consectetur. Urna dictum pulvinar a orci eu nunc diam in neque."
        }
        link={"https://mui.com/material-ui/customization/color/"}
        link2={"https://colors.eva.design"}
      />
      <Grid container spacing={4}>
        <Grid item desktop={4}>
          <Paper style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ paddingBottom: "48px" }}>
              <Typography variant="h4">Primary</Typography>
            </Box>

            {PRIMARY_COLORS.map((color) => (
              <Stack direction="row" spacing={2}>
                <CopyToClipboard
                  key={color.id}
                  text={color.color_hex}
                  onCopy={() => handleCopy(color.color_hex)}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      key={color.id}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: color.color_hex,
                      }}
                    />
                    <Stack>
                      <Typography variant="h6">{color.color_name}</Typography>
                      <Typography variant="h6">{color.color_hex}</Typography>
                    </Stack>
                  </Stack>
                </CopyToClipboard>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item desktop={4}>
          <Paper style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ paddingBottom: "48px" }}>
              <Typography variant="h4">Secondary</Typography>
            </Box>
            {SECONDARY_COLORS.map((color) => (
              <Stack direction="row" spacing={2}>
                <CopyToClipboard
                  key={color.id}
                  text={color.color_hex}
                  onCopy={() => handleCopy(color.color_hex)}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      key={color.id}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: color.color_hex,
                      }}
                    />
                    <Stack>
                      <Typography variant="h6">{color.color_name}</Typography>
                      <Typography variant="h6">{color.color_hex}</Typography>
                    </Stack>
                  </Stack>
                </CopyToClipboard>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item desktop={4}>
          <Paper style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ paddingBottom: "48px" }}>
              <Typography variant="h4">Info</Typography>
            </Box>
            {INFO_COLORS.map((color) => (
              <Stack direction="row" spacing={2}>
                <CopyToClipboard
                  key={color.id}
                  text={color.color_hex}
                  onCopy={() => handleCopy(color.color_hex)}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      key={color.id}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: color.color_hex,
                      }}
                    />
                    <Stack>
                      <Typography variant="h6">{color.color_name}</Typography>
                      <Typography variant="h6">{color.color_hex}</Typography>
                    </Stack>
                  </Stack>
                </CopyToClipboard>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item desktop={4}>
          <Paper style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ paddingBottom: "48px" }}>
              <Typography variant="h4">Success</Typography>
            </Box>
            {SUCCESS_COLORS.map((color) => (
              <Stack direction="row" spacing={2}>
                <CopyToClipboard
                  key={color.id}
                  text={color.color_hex}
                  onCopy={() => handleCopy(color.color_hex)}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      key={color.id}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: color.color_hex,
                      }}
                    />
                    <Stack>
                      <Typography variant="h6">{color.color_name}</Typography>
                      <Typography variant="h6">{color.color_hex}</Typography>
                    </Stack>
                  </Stack>
                </CopyToClipboard>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item desktop={4}>
          <Paper style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ paddingBottom: "48px" }}>
              <Typography variant="h4">Warning</Typography>
            </Box>
            {WARNING_COLORS.map((color) => (
              <Stack direction="row" spacing={2}>
                <CopyToClipboard
                  key={color.id}
                  text={color.color_hex}
                  onCopy={() => handleCopy(color.color_hex)}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      key={color.id}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: color.color_hex,
                      }}
                    />
                    <Stack>
                      <Typography variant="h6">{color.color_name}</Typography>
                      <Typography variant="h6">{color.color_hex}</Typography>
                    </Stack>
                  </Stack>
                </CopyToClipboard>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item desktop={4}>
          <Paper style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ paddingBottom: "48px" }}>
              <Typography variant="h4">Danger</Typography>
            </Box>
            {DANGER_COLORS.map((color) => (
              <Stack direction="row" spacing={2}>
                <CopyToClipboard
                  key={color.id}
                  text={color.color_hex}
                  onCopy={() => handleCopy(color.color_hex)}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      key={color.id}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: color.color_hex,
                      }}
                    />
                    <Stack>
                      <Typography variant="h6">{color.color_name}</Typography>
                      <Typography variant="h6">{color.color_hex}</Typography>
                    </Stack>
                  </Stack>
                </CopyToClipboard>
              </Stack>
            ))}
          </Paper>
        </Grid>
        <Grid item desktop={4}>
          <Paper style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ paddingBottom: "48px" }}>
              <Typography variant="h4">Neutral</Typography>
            </Box>
            {NEUTRAL_COLORS.map((color) => (
              <Stack direction="row" spacing={2}>
                <CopyToClipboard
                  key={color.id}
                  text={color.color_hex}
                  onCopy={() => handleCopy(color.color_hex)}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      key={color.id}
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: color.color_hex,
                      }}
                    />
                    <Stack>
                      <Typography variant="h6">{color.color_name}</Typography>
                      <Typography variant="h6">{color.color_hex}</Typography>
                    </Stack>
                  </Stack>
                </CopyToClipboard>
              </Stack>
            ))}
          </Paper>
        </Grid>
      </Grid>

      <CustSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </Fragment>
  );
};
