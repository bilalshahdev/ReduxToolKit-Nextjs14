import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { author, randomUsers } from "@/config/constants";

const initialState: UserI[] = [author, ...randomUsers];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserI>) => {
      state.push(action.payload);
    },
    editUser: (state, action: PayloadAction<UserI>) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
