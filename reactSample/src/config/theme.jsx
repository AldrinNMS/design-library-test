import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF4545",
    },

    secondary: {
      main: "#FFC7B4",
    },
    tertiary: {
      main: "#FF6969",
    },
    quaternary: {
      main: "#DFDFDF",
    },
    info: {
      main: "#00B9ED",
    },
    warning: {
      main: "#FFB83F",
    },
    error: {
      main: "#F96D82",
    },
    success: {
      main: "#03C04A",
    },
    neutral: {
      main: "#919EAB",
    },
    icon: {
      main: "#757575",
    },
    text: {
      main: "#4E4E4E",
    },
    background: {
      default: "#FBFBFC",
      paper: "#FBFBFC",
    },
  },

  spacing: 8,
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 900,
      desktop: 1200,
      largeDesktop: 1600,
    },
  },
  props: {
    topBarHeight: "60px",
    drawerWidth: "187px",
    drawerWidthOpen: "45px",
    contrastText: "#5A5A5A",
    baseBg: "rgb(30,30,30)",
  },
  shadows: Array(25).fill("none"),
  typography: {
    fontSize: 11,
    color: "#595959",
    fontFamily: ["Lato"].join(","),
    at: {
      fontSize: 18,
      color: "#000",
      fontStyle: "bold",
    },
    h1: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "64px",
    },
    h2: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "50px",
    },
    h3: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "35px",
    },
    h3l: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "35px",
    },
    h4: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "24px",
    },
    h4l: {
      fontFamily: "Lato",
      fontWeight: 300,
      fontSize: "24px",
    },
    h5: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "18px",
    },
    h6: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "16px",
    },
    description: {
      fontFamily: "Lato",
      fontWeight: 300,
      fontSize: "14px",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#F9F9F9",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "none",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          background: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "12px",
          borderRadius: "5px",
          padding: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "14px",
          borderRadius: "10px",
          textTransform: "uppercase",
          boxShadow: "none",
          minWidth: "109px",
          padding: "8px 22px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.MuiFormHelperTex-root.Muierror": {
            color: "#FA698B",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#B1C5E6",
          },
          ".MuiFormLabel-root.Mui-error": {
            color: "#FFFFFF",
          },
          "&.MuiFormHelperText-root.Mui-error": {
            color: "#FA698B",

            "& fieldset": {
              borderColor: "#FA698B",
            },
            "&:hover fieldset": {
              borderColor: "#FA698B",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FA698B",
            },
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          ".MuiFormControlLabel-label": {
            fontSize: "14px",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
        variant: "outlined",
        // color: "input",
      },
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-root": {
            borderRadius: "10px",
            minHeight: "37px",
            gap: "5px",
          },
          "& fieldset": {
            borderColor: "B1C5E6",
          },
          ".MuiOutlinedInput-root.Mui-disabled": {
            borderRadius: "10px",
            background: "#2D3859",
            color: "",
            width: "100%",
          },
          "#outlined-required-label": {
            color: "white",
          },
          ".MuiOutlinedInput-root.Mui-error": {
            "&:hover fieldset": {
              borderColor: "#FA698B",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FA698B",
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      defaultProps: {
        size: "medium",
        fullWidth: true,
        variant: "outlined",
        // color: "input",
      },

      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            borderRadius: "10px",
            minHeight: "37px",
            gap: "5px",
          },
          "&.MuiOutlinedInput-root.Mui-disabled": {
            borderRadius: "10px",
            background: "#2D3859",
            color: "",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "48px",
          borderRadius: "1rem",
          transition: "0.3s",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        },
      },
    },

    MuiCheckbox: {
      defaultProps: {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.75"
              y="0.75"
              width="20.5"
              height="20.5"
              rx="3.25"
              stroke="#B1C5E6"
              strokeWidth="1.5"
            />
          </svg>
        ),
        checkedIcon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0066 6.57295L9.84667 12.751L7.10719 10.0316L7.10709 10.0315C6.94508 9.87081 6.66167 9.70042 6.32486 9.64699C5.96027 9.58917 5.533 9.67097 5.16847 10.0293C4.77716 10.414 4.61764 10.8311 4.69528 11.244C4.76421 11.6106 5.00445 11.8556 5.10487 11.9552L5.10475 11.9554L5.11398 11.9641L9.05628 15.6816C9.2558 15.8758 9.55667 15.9749 9.78816 16.0109C9.9167 16.0308 10.0619 16.0378 10.2055 16.016C10.3425 15.9951 10.5288 15.94 10.6791 15.7908L10.6791 15.7908L18.294 8.23478C18.294 8.23473 18.2941 8.23468 18.2941 8.23463C18.4132 8.11656 18.4877 7.96721 18.5334 7.83663C18.5816 7.69874 18.6111 7.54389 18.6167 7.38504C18.6276 7.07506 18.5474 6.68099 18.2452 6.38111C18.0215 6.15915 17.7664 6.03005 17.4978 5.98694C17.2357 5.94487 16.9939 5.98981 16.7958 6.06082C16.4118 6.19841 16.1214 6.45904 16.0085 6.57102L16.0066 6.57295ZM0.5 3.66667C0.5 1.91777 1.91777 0.5 3.66667 0.5H18.3333C20.0822 0.5 21.5 1.91777 21.5 3.66667V18.3333C21.5 20.0822 20.0822 21.5 18.3333 21.5H3.66667C1.91777 21.5 0.5 20.0822 0.5 18.3333V3.66667Z"
              fill="#FF4545"
              stroke="#FF4545"
            />
          </svg>
        ),
      },
      styleOverrides: {
        root: {
          "&.MuiCheckbox-root": {
            color: "#4F6FA3",
          },
        },
      },
    },

    MuiChip: {
      defaultProps: {
        size: "28px",
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          minWidth: "50px",
          fontSize: "12px",
          fontWeight: 500,
          padding: "8px",
          gap: "4px",

          color: "#638BCC",
          background: "#F2F5FA",

          "&.MuiChip-colorSuccess": {
            color: "#2E7918",
            background: "#F1fcdc",
          },
          "&.MuiChip-colorError": {
            color: "#DB3241",
            background: "#FFE6D9",
          },
          ".MuiChip-deleteIcon": {
            color: "#638BCC",
          },
          ".MuiChip-deleteIcon:hover": {
            color: "#89a2cc",
          },
        },
      },
    },

    MuiDialog: {
      defaultProps: {
        maxWidth: "laptop",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          ".MuiDialog-paper": {
            borderRadius: "20px",
            padding: "48px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "@media only screen and (max-width: 768px)": {
              borderRadius: 0,
              padding: "24px",
            },
            backgroundColor: "",
          },
          ".MuiDialogContent-root": {
            padding: "15px 15px 15px 0",

            borderBottom: "none",
            borderTop: "none",
          },
        },
      },
    },

    MuiIcon: {
      defaultProps: {
        fontSize: "inherit",
      },
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          "&>.MuiDrawer-paper": {
            borderRight: "1px dashed rgba(145, 158, 171, 0.2)",
            boxShadow: "none",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiDrawer-paperAnchorDockedLeft": {
            background: "",
          },
          "&.MuiPaper-elevation1": {
            borderRadius: "20px",
            padding: "48px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
            "@media only screen and (max-width: 768px)": {
              padding: "  24px",
            },
          },
          "&.MuiPaper-elevation2": {
            //container
            borderRadius: "20px",
            padding: "24px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          "&.MuiPaper-elevation3": {
            //container
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderRadius: "20px",
            padding: "16px",
            boxShadow:
              "0px 1px 3px 0px rgba(74, 83, 99, 0.12), 0px 1px 1px 0px rgba(74, 83, 99, 0.14), 0px 2px 1px -1px rgba(74, 83, 99, 0.20);",
          },
          "&.MuiPaper-elevation4": {
            //container
            borderRadius: "20px",
            boxShadow: "white",
            // background: "none",
          },
          "&.MuiPaper-elevation5": {
            //container my device
            padding: "16px 24px ",
            "@media only screen and (max-width: 900px)": {
              padding: "16px",
            },
            borderRadius: "20px",
            boxShadow:
              "0px 1px 3px 0px rgba(74, 83, 99, 0.12), 0px 1px 1px 0px rgba(74, 83, 99, 0.14), 0px 2px 1px -1px rgba(74, 83, 99, 0.20)",
            backgroundColor: "#17203c",
          },
          "&.MuiPaper-elevation6": {
            //container
            borderRadius: "5px",
            padding: "16px",
            boxShadow: "none",
          },
          "&.MuiAutocomplete-paper": {
            padding: "8px",
          },
          ".MuiAutocomplete-option": {
            "&:hover": {
              borderRadius: "5px",
              color: "#FF4545",
              background: "#FFECEC",
            },
          },
          "&.MuiPaper-dashedVariant": {
            borderRadius: "20px",
            border: "1px dashed #ccc",
            backgroundColor: "#00000",
            padding: "48px",
          },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiMenu-paper": {
            borderRadius: "10px",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          ".MuiMenuItem-root:active": {
            backgroundColor: "#324666 !important",
          },
        },
      },
    },

    MuiAccordion: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "&.MuiAccordion-root": {
            padding: "0",
            background: "none",
            boxShadow: "none",
          },
          "&.MuiAccordion-root::before": {
            height: 0,
          },
          ".MuiAccordionSummary-content > h6": {
            fontWeight: "600 !important",
            fontSize: "15px",
          },
          "&.MuiPaper-root": {
            margin: "0px !important",
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0px, 24px",
          "@media only screen and (max-width: 1200px)": {
            padding: "0px",
          },
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        root: {
          width: "24px",
          height: "24px",
          borderRadius: "100%",
        },
      },
    },

    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          ".MuiAvatarGroup-avatar": {
            border: "3px solid #FEFEFE",
            borderRadius: "10px",
          },
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          "& .MuiDataGrid-main": {
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              borderColor: "none",
            },
            "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus":
            {
              outline: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "800",
              fontSize: "16px",
            },
            "& .MuiDataGrid-withBorderColor": {
              borderColor: "none",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#F2F5FA",
            },
            "& .MuiDataGrid-virtualScrollerContent:last-child": {
              border: "none !important",
            },
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: "300px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          msOverflowStyle: "-ms-autohiding-scrollbar",
          "--scrollbarBG": "transparent",
        },
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#222B46",
        },
        "*::-webkit-scrollbar-track": {
          background: "var(--scrollbarBG)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#222B46",
          borderRadius: "6px",
        },
        "*::-webkit-scrollbar-corner": {
          background: "transparent",
        },
        "*::-webkit-scrollbar": {
          width: "6px",
          height: "8px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
          alignContent: "center",
        },
      },
    },
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF4545",
    },
    secondary: {
      main: "#FFC7B4",
    },
    tertiary: {
      main: "#FF6969",
    },
    quaternary: {
      main: "#4F4F4F",
    },
    info: {
      main: "#00B9ED",
    },
    warning: {
      main: "#FFB83F",
    },
    error: {
      main: "#F96D82",
    },
    success: {
      main: "#78E236",
    },
    neutral: {
      main: "#919EAB",
    },
    icon: {
      main: "#A9A9A9",
    },
    text: {
      main: "#ACACAC",
    },
    background: {
      default: "#161C24",
      paper: "#161C24",
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 900,
      desktop: 1200,
      largeDesktop: 1600,
    },
  },
  props: {
    topBarHeight: "60px",
    drawerWidth: "187px",
    drawerWidthOpen: "45px",
    contrastText: "#5A5A5A",
    baseBg: "rgb(30,30,30)",
  },
  shadows: Array(25).fill("none"),
  typography: {
    fontSize: 11,
    color: "#595959",
    fontFamily: ["Lato"].join(","),
    at: {
      fontSize: 18,
      color: "#000",
      fontStyle: "bold",
    },
    h1: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "64px",
    },
    h2: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "50px",
    },
    h3: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "35px",
    },
    h3l: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "35px",
    },
    h4: {
      fontFamily: "Lato",
      fontWeight: 700,
      fontSize: "24px",
    },
    h4l: {
      fontFamily: "Lato",
      fontWeight: 300,
      fontSize: "24px",
    },
    h5: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "18px",
    },
    h6: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "16px",
    },
    description: {
      fontFamily: "Lato",
      fontWeight: 300,
      fontSize: "14px",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#161C24",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "none",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          background: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "12px",
          borderRadius: "5px",
          padding: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "14px",
          borderRadius: "10px",
          textTransform: "uppercase",
          boxShadow: "none",
          minWidth: "109px",
          padding: "8px 22px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.MuiFormHelperTex-root.Muierror": {
            color: "#FA698B",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#B1C5E6",
          },
          ".MuiFormLabel-root.Mui-error": {
            color: "#FFFFFF",
          },
          "&.MuiFormHelperText-root.Mui-error": {
            color: "#FA698B",

            "& fieldset": {
              borderColor: "#FA698B",
            },
            "&:hover fieldset": {
              borderColor: "#FA698B",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FA698B",
            },
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          ".MuiFormControlLabel-label": {
            fontSize: "14px",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
        variant: "outlined",
        // color: "input",
      },
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-root": {
            borderRadius: "10px",
            minHeight: "37px",
            gap: "5px",
          },
          "& fieldset": {
            borderColor: "B1C5E6",
          },
          ".MuiOutlinedInput-root.Mui-disabled": {
            borderRadius: "10px",
            background: "#2D3859",
            color: "",
            width: "100%",
          },
          "#outlined-required-label": {
            color: "white",
          },
          ".MuiOutlinedInput-root.Mui-error": {
            "&:hover fieldset": {
              borderColor: "#FA698B",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FA698B",
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      defaultProps: {
        size: "medium",
        fullWidth: true,
        variant: "outlined",
      },

      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            borderRadius: "10px",
            minHeight: "37px",
            gap: "5px",
          },
          "&.MuiOutlinedInput-root.Mui-disabled": {
            borderRadius: "10px",
            background: "#2D3859",
            color: "",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "48px",
          borderRadius: "1rem",
          transition: "0.3s",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        },
      },
    },

    MuiCheckbox: {
      defaultProps: {
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.75"
              y="0.75"
              width="20.5"
              height="20.5"
              rx="3.25"
              stroke="#B1C5E6"
              strokeWidth="1.5"
            />
          </svg>
        ),
        checkedIcon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0066 6.57295L9.84667 12.751L7.10719 10.0316L7.10709 10.0315C6.94508 9.87081 6.66167 9.70042 6.32486 9.64699C5.96027 9.58917 5.533 9.67097 5.16847 10.0293C4.77716 10.414 4.61764 10.8311 4.69528 11.244C4.76421 11.6106 5.00445 11.8556 5.10487 11.9552L5.10475 11.9554L5.11398 11.9641L9.05628 15.6816C9.2558 15.8758 9.55667 15.9749 9.78816 16.0109C9.9167 16.0308 10.0619 16.0378 10.2055 16.016C10.3425 15.9951 10.5288 15.94 10.6791 15.7908L10.6791 15.7908L18.294 8.23478C18.294 8.23473 18.2941 8.23468 18.2941 8.23463C18.4132 8.11656 18.4877 7.96721 18.5334 7.83663C18.5816 7.69874 18.6111 7.54389 18.6167 7.38504C18.6276 7.07506 18.5474 6.68099 18.2452 6.38111C18.0215 6.15915 17.7664 6.03005 17.4978 5.98694C17.2357 5.94487 16.9939 5.98981 16.7958 6.06082C16.4118 6.19841 16.1214 6.45904 16.0085 6.57102L16.0066 6.57295ZM0.5 3.66667C0.5 1.91777 1.91777 0.5 3.66667 0.5H18.3333C20.0822 0.5 21.5 1.91777 21.5 3.66667V18.3333C21.5 20.0822 20.0822 21.5 18.3333 21.5H3.66667C1.91777 21.5 0.5 20.0822 0.5 18.3333V3.66667Z"
              fill="#FF4545"
              stroke="#FF4545"
            />
          </svg>
        ),
      },
      styleOverrides: {
        root: {
          "&.MuiCheckbox-root": {
            color: "#4F6FA3",
          },
        },
      },
    },

    MuiChip: {
      defaultProps: {
        size: "28px",
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          minWidth: "50px",
          fontSize: "12px",
          fontWeight: 500,
          padding: "8px",
          gap: "4px",

          color: "#638BCC",
          background: "#F2F5FA",

          "&.MuiChip-colorSuccess": {
            color: "#2E7918",
            background: "#F1fcdc",
          },
          "&.MuiChip-colorError": {
            color: "#DB3241",
            background: "#FFE6D9",
          },
          ".MuiChip-deleteIcon": {
            color: "#638BCC",
          },
          ".MuiChip-deleteIcon:hover": {
            color: "#89a2cc",
          },
        },
      },
    },

    MuiDialog: {
      defaultProps: {
        maxWidth: "laptop",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          ".MuiDialog-paper": {
            borderRadius: "20px",
            padding: "48px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "@media only screen and (max-width: 768px)": {
              borderRadius: 0,
              padding: "24px",
            },
            backgroundColor: "#081332",
          },
          ".MuiDialogContent-root": {
            padding: "15px 15px 15px 0",

            borderBottom: "none",
            borderTop: "none",
          },
        },
      },
    },

    MuiIcon: {
      defaultProps: {
        fontSize: "inherit",
      },
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          "&>.MuiDrawer-paper": {
            borderRight: "1px dashed rgba(145, 158, 171, 0.2)",
            boxShadow: "none",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiDrawer-paperAnchorDockedLeft": {
            background: "",
          },
          "&.MuiPaper-elevation1": {
            borderRadius: "20px",
            padding: "48px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            height: "auto",
            "@media only screen and (max-width: 768px)": {
              padding: "  24px",
            },
          },
          "&.MuiPaper-elevation2": {
            //container
            borderRadius: "20px",
            padding: "24px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          "&.MuiPaper-elevation3": {
            //container
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderRadius: "20px",
            padding: "16px",
            boxShadow:
              "0px 1px 3px 0px rgba(74, 83, 99, 0.12), 0px 1px 1px 0px rgba(74, 83, 99, 0.14), 0px 2px 1px -1px rgba(74, 83, 99, 0.20);",
          },
          "&.MuiPaper-elevation4": {
            //container
            borderRadius: "20px",
            boxShadow: "white",
            // background: "none",
          },
          "&.MuiPaper-elevation5": {
            //container my device
            padding: "16px 24px ",
            "@media only screen and (max-width: 900px)": {
              padding: "16px",
            },
            borderRadius: "20px",
            boxShadow:
              "0px 1px 3px 0px rgba(74, 83, 99, 0.12), 0px 1px 1px 0px rgba(74, 83, 99, 0.14), 0px 2px 1px -1px rgba(74, 83, 99, 0.20)",
            backgroundColor: "#17203c",
          },
          "&.MuiPaper-elevation6": {
            //container
            borderRadius: "5px",
            padding: "16px",
            boxShadow: "none",
          },
          "&.MuiAutocomplete-paper": {
            padding: "8px",
          },
          ".MuiAutocomplete-option": {
            "&:hover": {
              borderRadius: "5px",
              color: "#FF4545",
              background: "#FFECEC",
            },
          },
          "&.MuiPaper-dashedVariant": {
            borderRadius: "20px",
            border: "1px dashed #2F363F",
            backgroundColor: "#00000",
            padding: "48px",
          },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiMenu-paper": {
            borderRadius: "10px",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          ".MuiMenuItem-root:active": {
            backgroundColor: "#324666 !important",
          },
        },
      },
    },

    MuiAccordion: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "&.MuiAccordion-root": {
            padding: "0",
            background: "none",
            boxShadow: "none",
          },
          "&.MuiAccordion-root::before": {
            height: 0,
          },
          ".MuiAccordionSummary-content > h6": {
            fontWeight: "600 !important",
            fontSize: "15px",
          },
          "&.MuiPaper-root": {
            margin: "0px !important",
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0px, 24px",
          "@media only screen and (max-width: 1200px)": {
            padding: "0px",
          },
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        root: {
          width: "24px",
          height: "24px",
          borderRadius: "100%",
        },
      },
    },

    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          ".MuiAvatarGroup-avatar": {
            border: "3px solid #2D364F",
            borderRadius: "10px",
            color: "#B1C5E6",
            backgroundColor: "#324666",
          },
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          "& .MuiDataGrid-main": {
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              borderColor: "none",
            },
            "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus":
            {
              outline: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "800",
              fontSize: "16px", // Replace with your desired font size
            },
            "& .MuiDataGrid-withBorderColor": {
              borderColor: "none",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#637381",
            },
            "& .MuiDataGrid-virtualScrollerContent:last-child": {
              border: "none !important",
            },
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: "300px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          msOverflowStyle: "-ms-autohiding-scrollbar",
          "--scrollbarBG": "transparent",
        },
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#222B46",
        },
        "*::-webkit-scrollbar-track": {
          background: "var(--scrollbarBG)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#222B46",
          borderRadius: "6px",
        },
        "*::-webkit-scrollbar-corner": {
          background: "transparent",
        },
        "*::-webkit-scrollbar": {
          width: "6px",
          height: "8px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
          alignContent: "center",
        },
      },
    },
  },
});

const echartsTheme = {
  color: [
    "#FF4545",
    "#FFE6D9",
    "#FFC7B4",
    "#FF6969",
    "#DFDFDF",
    "#00B9ED",
    "#FFB83F",
    "#F96D82",
    "#03C04A",
  ],
};

const combinedTheme = {
  ...lightTheme,
  echarts: echartsTheme,
};

export { lightTheme, dark, combinedTheme };
