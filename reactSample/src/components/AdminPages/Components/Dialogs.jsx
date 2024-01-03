import { Button } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { Fragment, useState } from "react";
import { CustDialog } from "../../GenericComponents/GeneralComponents/CustDialog";
import CustSnackbar from "../../GenericComponents/GeneralComponents/CustSnackbar";

export const Dialogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isSubDialog, setIsSubDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");



  const handleClose = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsSubDialog(false);
    setIsOpen4(false);
  };

  const handleSaveSubDialog = () => {
    setIsOpen3(false);
    setIsSubDialog(false);
  };

  const handleSaveWithSnackbar = () => {
    setIsOpen4(false);

    setSnackbarMessage(`Success Dialog uwu`);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item desktop={12}>
          <Stack direction="row" spacing={1}>
            <Button color="primary" onClick={() => setIsOpen(true)}>
              Dialog without Actions
            </Button>
            <Button color="primary" onClick={() => setIsOpen2(true)}>
              Dialog with Actions
            </Button>
            <Button color="primary" onClick={() => setIsOpen3(true)}>
              Dialog with sub dialog
            </Button>
            <Button color="primary" onClick={() => setIsOpen4(true)}>
              Dialog with snackbar
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <CustDialog
        title={"Dialog without Actions"}
        close={handleClose}
        isOpen={isOpen}
      >
        sample dialog
      </CustDialog>
      <CustDialog
        title={"Dialog with Actions"}
        close={handleClose}
        isOpen={isOpen2}
        actions={
          <Fragment>
            <Button variant="outlined" onClick={() => setIsOpen2(false)}>
              Cancel
            </Button>
            <Button>Save</Button>
          </Fragment>
        }
      >
        sample dialog
      </CustDialog>
      <CustDialog
        title={"Dialog with sub dialog"}
        close={handleClose}
        isOpen={isOpen3}
        actions={
          <Fragment>
            <Button variant="outlined" onClick={() => setIsOpen3(false)}>
              CANCEL
            </Button>
            <Button onClick={() => setIsSubDialog(true)}>SAVE</Button>
          </Fragment>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ligula
        pretium, eleifend sem pretium, eleifend urna. Aliquam dui enim, pharetra
        et dictum quis, mollis et enim. Nam facilisis ex lacus, ac volutpat
        ipsum egestas sed. Donec aliquam tincidunt tincidunt. Nullam elementum
        nunc nunc, et ultricies nisl elementum sed. Cras maximus mattis feugiat.
        Suspendisse vitae tellus ex. Donec eleifend commodo neque, sed auctor
        metus vehicula sed. Curabitur odio nunc, auctor ac hendrerit vel,
        ullamcorper ac sapien. Suspendisse potenti. Nunc arcu urna, aliquam eget
        metus quis, mollis finibus est. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Suspendisse eget
        venenatis felis, non egestas est.
      </CustDialog>

      <CustDialog
        title={"Sub Dialog"}
        close={handleClose}
        isOpen={isSubDialog}
        actions={
          <Fragment>
            <Button color="primary" variant="outlined">
              CANCEL
            </Button>
            <Button onClick={handleSaveSubDialog}>SAVE</Button>
          </Fragment>
        }
      >
        <Typography>I am a sub dialog hehe</Typography>
      </CustDialog>

      <CustDialog
        title={"Dialog with snackbar"}
        close={handleClose}
        isOpen={isOpen4}
        actions={
          <Fragment>
            <Button color="primary" variant="outlined">
              CANCEL
            </Button>
            <Button onClick={handleSaveWithSnackbar}>SAVE</Button>
          </Fragment>
        }
      >
        <Typography>snackbar</Typography>
        <CustSnackbar
          open={snackbarOpen}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          severity={snackbarSeverity}
        />
      </CustDialog>

    </Fragment>
  );
};
