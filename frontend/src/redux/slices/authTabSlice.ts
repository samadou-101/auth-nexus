import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface TabsState {
  selectedTab: 0 | 1 | 2;
}

const initialState: TabsState = {
  selectedTab: 0,
};
export const authTabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    selectTab: (state, action: PayloadAction<0 | 1 | 2>) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { selectTab } = authTabSlice.actions;

export default authTabSlice.reducer;
