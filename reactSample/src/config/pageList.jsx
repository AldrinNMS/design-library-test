import {SECTION} from "./enums";
import {COMPONENT} from "./components";

export const PAGELIST = [
  {
    title: "Home",
    name: "home",
    component: COMPONENT.menu.home,
    key: 1,
    path: "/",
    section: SECTION.HOME,
  },
  {
    title: "Components",
    name: "components",
    component: COMPONENT.menu.components,
    key: 2,
    path: "/components",
  },
];
