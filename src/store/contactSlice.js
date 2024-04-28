import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contactSlice",
  initialState: { result: "", formRef: "" },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },

    setFormRef: (state, action) => {
      state.formRef = action.payload;
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice;
