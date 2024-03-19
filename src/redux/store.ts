import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import modalSlice from "./slices/modalSlice";
import confirmationSlice from "./slices/confirmationSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    users: usersSlice,
    confirmation: confirmationSlice,
  },

  // add middleware to ignore serializableCheck
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
