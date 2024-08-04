import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./ContactSlice";

export const store = configureStore({
  reducer: {
    contactApp: ContactReducer,
  },
});
