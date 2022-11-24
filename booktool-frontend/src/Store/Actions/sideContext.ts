import { createAsyncThunk } from "@reduxjs/toolkit";

import { displaySideContext, hideSideContext } from "@Store/Slices/sideContextSlice";

export const display = createAsyncThunk(
  "sideContext/display",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        displaySideContext(),
      );
    } catch (err) {
      await err;
    }
  },
);

export const hide = createAsyncThunk(
  "sideContext/hide",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(hideSideContext());
    } catch (err) {
      await err;
    }
  },
);