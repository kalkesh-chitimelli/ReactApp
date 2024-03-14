import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  generalItems: [],
  error: "",
};

export const fetchMockData = createAsyncThunk("fetchMockData", async () => {
  const response = await axios.get(
    "https://65dc2f903ea883a15292a74f.mockapi.io/generalItems"
  );
  return response.data;
});

const mockDataSlice = createSlice({
  name: "mockData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMockData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMockData.fulfilled, (state, action) => {
      state.loading = false;
      state.generalItems = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMockData.rejected, (state, action) => {
      state.loading = false;
      state.generalItems = [];
      state.error = action.error.message;
    });
  },
});

export default mockDataSlice.reducer;
