import { createSlice } from "@reduxjs/toolkit";
import { PAGES } from "./pages.enum";
import { RootState } from "@/redux";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IMobilePageSelectedState {
  value: PAGES;
}

const initialState: IMobilePageSelectedState = {
  value: PAGES.home,
};

export const mobilePageSelectedSlice = createSlice({
  name: "mobilePageSelected",
  initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<PAGES>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectPage } = mobilePageSelectedSlice.actions;

export const mobilePageSelected = (state: RootState) =>
  state.mobilePageSelected.value;

export default mobilePageSelectedSlice.reducer;
