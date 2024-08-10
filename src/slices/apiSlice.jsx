import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../services/apiService";

const initialState = {
  result: null,
  error: false,
  success: false,
  loading: true,
}

export const Select = createAsyncThunk(
  "api/select",
  async (body, thunkAPI) => {
    const data = await apiService.Select(body);

    if (data.error) {
      return thunkAPI.rejectWithValue(data.message);
    }

    return data;
  }
);

export const apiSlice = createSlice({
  name: "api",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(Select.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(Select.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.result = action.payload;
      })
      .addCase(Select.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  },
});

export default apiSlice.reducer;
