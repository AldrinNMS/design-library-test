import {SnackbarProvider} from "notistack";
import React from "react";
import ReactDOM from "react-dom";
import {Routers} from "./routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <Routers />
    </SnackbarProvider>
  </React.StrictMode>
);
