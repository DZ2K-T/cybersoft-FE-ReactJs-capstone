import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";

// Async actions

export const fetchInforCinema = createAsyncThunk(
  "cinema/hethongrap",
  async (theatersystem, { rejectWithValue }) => {
    try {
      const result = await api.get(`QuanLyRap/LayThongTinHeThongRap`, {
        params: theatersystem, // Sử dụng params để truyền dữ liệu query
      });
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchInforCumrap = createAsyncThunk(
  "cinema/cumrap",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const showtime = createAsyncThunk(
  "cinema/showtime",
  async (showtimeData, { rejectWithValue }) => {
    try {
      const result = await api.post(`QuanLyDatVe/TaoLichChieu`, showtimeData);
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  loading: false,
  cinemaData: null,
  cumrapData: null,
  showtimeData: null,
  error: null,
};

// Slice
const creatShowTimeReducer = createSlice({
  name: "creatShowTimeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle showtime
    builder.addCase(showtime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showtime.fulfilled, (state, action) => {
      state.loading = false;
      state.showtimeData = action.payload;
    });
    builder.addCase(showtime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handle fetchInforCinema
    builder.addCase(fetchInforCinema.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInforCinema.fulfilled, (state, action) => {
      state.loading = false;
      state.cinemaData = action.payload;
    });
    builder.addCase(fetchInforCinema.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handle fetchInforCumrap
    builder.addCase(fetchInforCumrap.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInforCumrap.fulfilled, (state, action) => {
      state.loading = false;
      state.cumrapData = action.payload;
    });
    builder.addCase(fetchInforCumrap.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default creatShowTimeReducer.reducer;
