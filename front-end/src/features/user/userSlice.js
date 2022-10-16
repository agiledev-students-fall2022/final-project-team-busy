import { createSlice } from "@reduxjs/toolkit";

// default state of the slice
const initialState = {
  testValue: 0,
  name: "",
  email: "",
  calendar: null,
  settings: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    testIncrement: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.testValue += 1;
    },
    testDecrement: (state) => {
      state.testValue -= 1;
    },
    testIncrementByAmount: (state, action) => {
      //testValue is incremented by value in action.payload
      // which is passed through the dispatch function call in the components
      state.testValue += action.payload;
    },
  },
});

export const { testIncrement, testDecrement, testIncrementByAmount } =
  userSlice.actions;
export default userSlice.reducer;
