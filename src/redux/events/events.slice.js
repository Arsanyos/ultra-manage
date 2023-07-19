import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  event: null,
};
export const events = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addNewEvent: (state, action) => {
      state.event = action.payload;
    },
  },
});
export const { addNewEvent } = events.actions;
export default events.reducer;
export const selectEvent = (state) => {
  return state.event;
};
