'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserInfo = createAsyncThunk('userSlice/fetchUserInfo', async () => {
  await new Promise((resolve) => {
    return setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  },
  );
});

type InitState = {
  appLoading: boolean;
  userInfo?: any;
};

const initialState: InitState = {
  appLoading: false,
  userInfo: undefined,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    turnOnLoading(state) {
      state.appLoading = true;
    },
    turnOffLoading(state) {
      state.appLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      });
  },
});

const { actions, reducer } = userSlice;
export const { turnOnLoading, turnOffLoading } = actions;
export default reducer;
