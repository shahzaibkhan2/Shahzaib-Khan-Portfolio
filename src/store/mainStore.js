import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./navBarSlice";
import contactSlice from "./contactSlice";

const mainStore = configureStore({
  reducer: {
    NavbarSlice: navBarSlice.reducer,
    contactSlice: contactSlice.reducer,
  },
});

export default mainStore;
