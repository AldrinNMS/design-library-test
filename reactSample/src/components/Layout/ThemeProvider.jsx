import React, {useEffect} from "react";
import {ThemeProvider as MaterialThemeProvider} from "@mui/material/styles";

import useStore from "../../store/store";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {CssBaseline} from "@mui/material";
import {dark, light} from "@mui/material/styles/createPalette";

const ThemeProvider = ({children}) => {
  const [{theme}, actions] = useStore();
  const [defaultTheme] = useLocalStorage(
    "theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark"
  );
  useEffect(() => {
    actions.setTheme(defaultTheme);
  }, [actions, defaultTheme]);

  return (
    <MaterialThemeProvider theme={theme == "dark" ? light : dark}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;
