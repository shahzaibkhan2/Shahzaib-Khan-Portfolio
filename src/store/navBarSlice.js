import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
  name: "NavbarSlice",
  initialState: {
    menu: "home",
    stickyBg: false,
    menuRef: null,
    openRef: null,
    recentProject: false,
  },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },

    setStickyBg: (state, action) => {
      state.stickyBg = action.payload;
    },
    setRecentProject: (state) => {
      state.recentProject = !state.recentProject;
    },
  },
});

export const NavbarActions = navBarSlice.actions;
export default navBarSlice;
