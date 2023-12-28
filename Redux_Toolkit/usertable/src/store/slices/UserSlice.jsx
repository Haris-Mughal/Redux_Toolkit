import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      //   console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log(action.payload);
      // state.pop(action.payload);
      state.splice(action.payload, 1);
      // --------
      // let userToDel = state.indexOf(action.payload);
      // state.splice(userToDel, 1);
    },
    // // eslint-disable-next-line no-unused-vars
    // deleteAllUsers(state, action) {
    // deleteAllUsers() {
    //   return [];
    // },
  },
  extraReducers(builder) {
    // builder.addCase(userSlice.actions.deleteAllUsers, (state, action) => {}
    // builder.addCase(userSlice.actions.deleteAllUsers, () => {
    builder.addCase(deleteAllUsers, () => {
      return [];
    });
  },
});
// console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
