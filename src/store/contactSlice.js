import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contactSlice",
  initialState: { result: "" },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice;
