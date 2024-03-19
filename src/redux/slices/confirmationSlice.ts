import { createSlice } from "@reduxjs/toolkit";

const confirmationSlice = createSlice({
  name: "confirmation",
  initialState: {
    isOpen: false,
    message: "",
  },
  reducers: {
    openConfirmation: (state, action) => {
      state.isOpen = true;
      state.message = action.payload;
    },
    closeConfirmation: (state) => {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export default confirmationSlice.reducer;
export const { openConfirmation, closeConfirmation } =
  confirmationSlice.actions;
