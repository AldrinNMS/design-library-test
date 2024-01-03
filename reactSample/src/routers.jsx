import { Box } from "@mui/material";

import React, { useState } from "react";

import { Components } from "./components/AdminPages/Components/Components";
import Sidebar from "./components/GenericComponents/SidebarComponents/SideBar";
import { HomePage } from "./components/HomePage/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dark, lightTheme } from "./config/theme";
import { BasicForm } from "./components/AdminPages/BasicForm/BasicForm";
import { DialogPage } from "./components/Pages/DialogPage";
import { Richtext } from "./components/Pages/Richtext";
import { DisplayIcon } from "./components/AdminPages/Components/DisplayIcon";
import { SampleDataGrid } from "./components/AdminPages/Components/SampleDataGrid";

import { SampleColors } from "./components/Pages/SampleColors";
import { SampleTypo } from "./components/Pages/SampleTypo";
import { SampleChart } from "./components/Pages/SampleChart";
import { CodePage } from "./components/Pages/CodePage";

import { DropzonePage } from "./components/Pages/DropzonePage";

export const Routers = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const selectedTheme = darkMode ? dark : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Router>
        <Sidebar toggleDarkMode={toggleDarkMode} />
        <Box
          sx={{
            width: {
              xs: "vw",
              md: "40vw",
              lg: "40vw",
            },
            // margin: {
            //   xs: "0",
            //   md: "6%",
            // },
            height: "0vh",
            // marginTop: "0vh",
            marginLeft: "15vw",
            marginRight: "2vw",
          }}
        >
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/typography" element={<SampleTypo />} />
            <Route path="/components" element={<Components />} />
            <Route path="/basicForm" element={<BasicForm />} />
            <Route path="/dialogPage" element={<DialogPage />} />

            <Route path="/icons" element={<DisplayIcon />} />
            <Route path="/dataGrid" element={<SampleDataGrid />} />
            <Route path="/colors" element={<SampleColors />} />
            <Route path="/charts" element={<SampleChart />} />
            <Route path="/richText" element={<Richtext />} />
            <Route path="/codePage" element={<CodePage />} />
            <Route path="/dropzone" element={<DropzonePage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};
