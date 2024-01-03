// import {COMPONENT} from "./components";

import { fontSize } from "@mui/system";
import { OrderFilter } from "../components/GenericComponents/GeneralComponents/RadioGroupComponent";
import { HRIcon } from "../components/SVGComponents";

// export const MENUITEMS = [
//   {
//     title: "Home",
//     name: "home",
//     component: COMPONENT.menu.home,
//     key: 1,
//     path: "/",
//   },
//   {
//     title: "Components",
//     name: "components",
//     component: COMPONENT.menu.components,
//     key: 2,
//     path: "/components",
//   },
// ];

export const USERS = [
  {
    id: 1,
    image: "/public/images/Avatar1.png",
    fullName: "Adelynne Malubay",
    personalEmail: "adelynnemalubay@gmail.com",
    workEmail: "adarm@nms.ph",
    category: "Office Based",
    status: "Active",
  },
  {
    id: 2,
    image: "/public/images/Avatar1.png",
    fullName: "Celine Terrado",
    personalEmail: "celineTerrado@gmail.com",
    workEmail: "clt@nms.ph",
    category: "Office Based",
    status: "Inactive",
  },
  {
    id: 3,
    image: "/public/images/Avatar1.png",
    fullName: "Marjon Doping",
    personalEmail: "marjonDoping@gmail.com",
    workEmail: "marjon@nms.ph",
    category: "Office Based",
    status: "Inactive",
  },
  {
    id: 4,
    image: "/public/images/Avatar1.png",
    fullName: "Von Perez",
    personalEmail: "vonPerez@gmail.com",
    workEmail: "von@nms.ph",
    category: "Office Based",
    status: "Inactive",
  },
  {
    id: 5,
    image: "/public/images/Avatar1.png",
    fullName: "Elmer Bautista",
    personalEmail: "elmerBautista@gmail.com",
    workEmail: "elmer@nms.ph",
    category: "Office Based",
    status: "Active",
  },
];

export const USER_STATUS = [
  {
    id: 1,
    userStatus: "Active",
  },
  {
    id: 2,
    userStatus: "Inactive",
  },
];

export const BANNERS = [
  {
    id: 1,
    bannerImage: "public/images/MorningBanner.png",
    greeting: "Good Morning",
  },
  {
    id: 2,
    bannerImage: "public/images/AfternoonBanner.png",
    greeting: "Good Afternoon",
  },
  {
    id: 3,
    bannerImage: "public/images/EveningBanner.png",
    greeting: "Good Evening",
  },
];

export const PLATFORM_CARDS = [
  {
    id: 1,
    cardImage: "public/images/HrCard.png",
    desc: "Manage your attendance, finance and info",
    title: "HR App",
    cardIcon: <HRIcon />,
  },
  {
    id: 2,
    cardImage: "public/images/EvaluationCards.png",
    desc: "Manage your attendance, finance and info",
    title: "Evaluation App",
    cardIcon: <HRIcon />,
  },
  {
    id: 3,
    cardImage: "public/images/ExamCard.png",
    desc: "Manage your attendance, finance and info",
    title: "Exam App",
    cardIcon: <HRIcon />,
  },
];

export const TYPOGRAPHIES = [
  {
    id: 1,
    text: "h1. Heading",
    fontSize: "64px",
    subtext: "size: 64 / l-height: 80 / weight:800 / letterSpacing: 0",
  },
  {
    id: 2,
    text: "h2. Heading",
    fontSize: "48px",
    subtext: "size: 48 / l-height: 64 / weight:800 / letterSpacing: 0",
  },
  {
    id: 3,
    text: "h3. Heading",
    fontSize: "32px",
    subtext: "size: 32 / l-height: 48 / weight:700 / letterSpacing: 0",
  },
  {
    id: 4,
    text: "h4. Heading",
    fontSize: "24px",
    subtext: "size: 24 / l-height: 36 / weight:700 / letterSpacing: 0",
  },
  {
    id: 6,
    text: "h6. Heading",
    fontSize: "18px",
    subtext: "size: 18 / l-height: 28 / weight:700 / letterSpacing: 0",
  },
  {
    id: 7,
    text: "subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    fontSize: "16px",
    subtext: "size: 16 / l-height: 24 / weight:600 / letterSpacing: 0",
  },
  {
    id: 8,
    text: "subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
    fontSize: "14px",
    subtext: "size: 14 / l-height: 22 / weight:600 / letterSpacing: 0",
  },
  {
    id: 9,
    text: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
    fontSize: "16px",
    subtext: "size: 16 / l-height: 24 / weight:400 / letterSpacing: 0",
  },
  {
    id: 10,
    text: "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
    fontSize: "14px",
    subtext: "size: 14 / l-height: 22 / weight:400 / letterSpacing: 0",
  },
  {
    id: 11,
    text: "caption text",
    fontSize: "12px",
    subtext: "size: 12 / l-height: 18 / weight:400 / letterSpacing: 0",
  },
  {
    id: 12,
    text: "OVERLINE TEXT",
    fontSize: "12px",
    subtext: "size: 12 / l-height: 18 / weight:700 / letterSpacing: 0",
  },
  {
    id: 13,
    text: "BUTTON LARGE",
    fontSize: "15px",
    subtext: "size: 15 / l-height: 26 / weight:700 / letterSpacing: 0.46px",
  },
  {
    id: 14,
    text: "BUTTON MEDIUM",
    fontSize: "14px",
    subtext: "size: 14 / l-height: 24 / weight:700 / letterSpacing: 0.46px",
  },
  {
    id: 15,
    text: "BUTTON SMALL",
    fontSize: "13px",
    subtext: "size: 13 / l-height: 22 / weight:700 / letterSpacing: 0.46px",
  },
];

export const FILTER_LIST = [
  {
    id: 1,
    label: "Order",
    panel: "panel1",
    options: <OrderFilter />,
  },
];

//charts
export const CHART_DATA = [
  {
    name: "Text 1",
    data: [30, 40, 35, 100, 49, 200, 70, 91, 125],
  },
  {
    name: "Text 2",
    data: [45, 55, 50, 70, 65, 120, 90, 110, 150],
  },
];
export const COLUMN_DATA = [
  {
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];

export const STACKEDCOLUMN_DATA = [
  {
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 70, 10],
  },
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
  {
    name: "HEHE",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];

export const MIXED_CHART = [
  {
    id: 1,
    name: "TEAM A",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  },
  {
    id: 2,
    name: "TEAM B",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
  },
  {
    id: 2,
    name: "TEAM C",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  },
];

export const PIE_CHART = [15, 25, 35, 80];

// colors
export const PRIMARY_COLORS = [
  {
    id: 1,
    color_name: "100",
    color_hex: "#FFE6D9",
  },
  {
    id: 2,
    color_name: "200",
    color_hex: "#FFC7B4",
  },
  {
    id: 3,
    color_name: "300",
    color_hex: "#FFA28F",
  },
  {
    id: 4,
    color_name: "400",
    color_hex: "#FF7F73",
  },
  {
    id: 5,
    color_name: "Main",
    color_hex: "#FF4545",
  },
  {
    id: 6,
    color_name: "600",
    color_hex: "#DB3241",
  },
  {
    id: 7,
    color_name: "700",
    color_hex: "#B7223C",
  },
  {
    id: 8,
    color_name: "800",
    color_hex: "#931636",
  },
  {
    id: 9,
    color_name: "900",
    color_hex: "#7A0D33",
  },
];

export const SECONDARY_COLORS = [
  {
    id: 1,
    color_name: "100",
    color_hex: "#E2F0FC",
  },
  {
    id: 2,
    color_name: "200",
    color_hex: "#C6E0F9",
  },
  {
    id: 3,
    color_name: "300",
    color_hex: "#A5C7EF",
  },
  {
    id: 4,
    color_name: "400",
    color_hex: "#89AEE0",
  },
  {
    id: 5,
    color_name: "Main",
    color_hex: "#638BCC",
  },
  {
    id: 6,
    color_name: "600",
    color_hex: "#486BAF",
  },
  {
    id: 7,
    color_name: "700",
    color_hex: "#314F92",
  },
  {
    id: 8,
    color_name: "800",
    color_hex: "#1F3676",
  },
  {
    id: 9,
    color_name: "900",
    color_hex: "#132461",
  },
];

export const INFO_COLORS = [
  {
    id: 1,
    color_name: "100",
    color_hex: "#CBFEFA",
  },
  {
    id: 2,
    color_name: "200",
    color_hex: "#97FDFD",
  },
  {
    id: 3,
    color_name: "300",
    color_hex: "#63EEF9",
  },
  {
    id: 4,
    color_name: "400",
    color_hex: "#3DD9F4",
  },
  {
    id: 5,
    color_name: "Main",
    color_hex: "#00B9ED",
  },
  {
    id: 6,
    color_name: "600",
    color_hex: "#0090CB",
  },
  {
    id: 7,
    color_name: "700",
    color_hex: "#006CAA",
  },
  {
    id: 8,
    color_name: "800",
    color_hex: "#006CAA",
  },
  {
    id: 9,
    color_name: "900",
    color_hex: "#003771",
  },
];

export const SUCCESS_COLORS = [
  {
    id: 1,
    color_name: "100",
    color_hex: "#EFFDD6",
  },
  {
    id: 2,
    color_name: "200",
    color_hex: "#DAFCAF",
  },
  {
    id: 3,
    color_name: "300",
    color_hex: "#BEF685",
  },
  {
    id: 4,
    color_name: "400",
    color_hex: "#A2ED65",
  },
  {
    id: 5,
    color_name: "Main",
    color_hex: "#78E236",
  },
  {
    id: 6,
    color_name: "600",
    color_hex: "#59C227",
  },
  {
    id: 7,
    color_name: "700",
    color_hex: "#3EA21B",
  },
  {
    id: 8,
    color_name: "800",
    color_hex: "#288311",
  },
  {
    id: 9,
    color_name: "900",
    color_hex: "#186C0A",
  },
];

export const WARNING_COLORS = [
  {
    id: 1,
    color_name: "100",
    color_hex: "#FFF6D8",
  },
  {
    id: 2,
    color_name: "200",
    color_hex: "#FFEBB2",
  },
  {
    id: 3,
    color_name: "300",
    color_hex: "#FFDD8B",
  },
  {
    id: 4,
    color_name: "400",
    color_hex: "#FFCF6F",
  },
  {
    id: 5,
    color_name: "Main",
    color_hex: "#FFB83F",
  },
  {
    id: 6,
    color_name: "600",
    color_hex: "#DB942E",
  },
  {
    id: 7,
    color_name: "700",
    color_hex: "#B7731F",
  },
  {
    id: 8,
    color_name: "800",
    color_hex: "#935614",
  },
  {
    id: 9,
    color_name: "900",
    color_hex: "#7A400C",
  },
];

export const DANGER_COLORS = [
  {
    id: 1,
    color_name: "100",
    color_hex: "#FEE8E2",
  },
  {
    id: 2,
    color_name: "200",
    color_hex: "#FECCC5",
  },
  {
    id: 3,
    color_name: "300",
    color_hex: "#FDAAA7",
  },
  {
    id: 4,
    color_name: "400",
    color_hex: "#FB9197",
  },
  {
    id: 5,
    color_name: "Main",
    color_hex: "#F96D82",
  },
  {
    id: 6,
    color_name: "600",
    color_hex: "#D64F70",
  },
  {
    id: 7,
    color_name: "700",
    color_hex: "#B33660",
  },
  {
    id: 8,
    color_name: "800",
    color_hex: "#902251",
  },
  {
    id: 9,
    color_name: "900",
    color_hex: "#771448",
  },
];

export const NEUTRAL_COLORS = [
  {
    id: 1,
    color_name: "100",
    color_hex: "#F9FAFB",
  },
  {
    id: 2,
    color_name: "200",
    color_hex: "#F4F6F8",
  },
  {
    id: 3,
    color_name: "300",
    color_hex: "#DFE3E8",
  },
  {
    id: 4,
    color_name: "400",
    color_hex: "#C4CDD5",
  },
  {
    id: 5,
    color_name: "Main",
    color_hex: "#919EAB",
  },
  {
    id: 6,
    color_name: "600",
    color_hex: "#637381",
  },
  {
    id: 7,
    color_name: "700",
    color_hex: "#454F5B",
  },
  {
    id: 8,
    color_name: "800",
    color_hex: "#212B36",
  },
  {
    id: 9,
    color_name: "900",
    color_hex: "#161C24",
  },
];
