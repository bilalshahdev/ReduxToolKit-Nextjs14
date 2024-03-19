import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    title: "",
    description: "",
    handleConfirm: null,
  },
  reducers: {
    openModal: (state, action) => {
      const { title, description, handleConfirm } = action.payload;

      state.title = title || "";
      state.description = description || "";
      state.handleConfirm = handleConfirm || null;
    },
    closeModal: (state) => {
      state.title = "";
      state.description = "";
      state.handleConfirm = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
