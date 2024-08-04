import { IoIosContacts } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { ContactFormTypes } from "../types";

export const SIDEBAR_CONTENT = [
  {
    name: "Contact",
    path: "/contacts",
    icon: <IoIosContacts fontSize={24} />,
  },
  {
    name: "Charts and Maps",
    path: "/graphs",
    icon: <IoBarChartSharp fontSize={20} />,
  },
];

export const CONTACT_CONTENT_DATA: ContactFormTypes = [
  {
    label: "First Name:",
    name: "firstName",
    type: "text",
    className:
      "border-2 rounded-md border-slate-600 outline-none p-1 text-sm sm:text-xl",
    children: [],
    isTextField: true,
  },
  {
    label: "Last Name:",
    name: "lastName",
    type: "text",
    className:
      "border-2 rounded-md border-slate-600 outline-none p-1 text-sm sm:text-xl",
    children: [],
    isTextField: true,
  },
  {
    label: "Status: ",
    name: "Radio",
    isTextField: false,
    children: [
      { label: "Active", name: "status", value: "active", type: "radio" },
      { label: "InActive", name: "status", value: "inactive", type: "radio" },
    ],
  },
];

export const BUTTON_STYLE_CLASSNAME: string =
  "text-sm sm:text-xl border p-3 rounded-md bg-slate-700 text-white";

export const TITLE_STYLE_CLASSNAME: string = "text-sm sm:text-2xl";

export const TOOLTIP_STYLE_CLASSNAME: string = "text-[15px] font-black";
