import { createSlice } from "@reduxjs/toolkit";

export const BottomMenuSlice = createSlice({
  name: "bottomMenu",
  initialState: { value: "" },
  reducers: {
    setSelectedIcon: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedIcon } = BottomMenuSlice.actions;
export const selected = (state) => state.bottomMenu.value;
