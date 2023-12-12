import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      return [];
    },
    // when you have to called same function which is common working in other slice
    extraReducers(builder) {
      builder.addCase(userSlice.actions.deleteUse, () => {
        return [];
      });
    },
  },
});

// console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
