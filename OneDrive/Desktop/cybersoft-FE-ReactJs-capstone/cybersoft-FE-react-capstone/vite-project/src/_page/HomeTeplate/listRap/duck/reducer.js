import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the API Token
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NzE4MDgwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3MzI4NDAwfQ.bqygxoVHbmcy6bdDT5IDHZGoA3eMAp4YV6_E_dO_XxI";

// Async thunk for fetching cinema data
export const fetchCinemas = createAsyncThunk(
  "cinema/fetchCinemas",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            TokenCybersoft: API_TOKEN,
          },
        }
      );

      if (!response.ok) {
        return rejectWithValue("Failed to fetch data from the server");
      }

      const data = await response.json();

      if (data.statusCode === 200) {
        return data.content; // This should be an array
      } else {
        return rejectWithValue(data.message || "Unknown error");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const cinemaSlice = createSlice({
  name: 'cinema',
  initialState: {
    cinemasData: [], // Initialize as an array
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCinemas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCinemas.fulfilled, (state, action) => {
        state.loading = false;
        state.cinemasData = action.payload; // Action payload should be an array
      })
      .addCase(fetchCinemas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cinemaSlice.reducer;

