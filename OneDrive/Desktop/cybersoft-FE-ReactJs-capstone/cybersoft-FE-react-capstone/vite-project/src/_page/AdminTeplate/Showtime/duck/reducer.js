import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/apiService"



// Async actions

export const fecthInforCinema = createAsyncThunk(
  "cinema/hethongrap",
  async (theatersystem, { rejectWithValue }) => {
    try {
      const result = await api.get(`QuanLyRap/LayThongTinHeThongRap`, theatersystem)
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fecthInforCumrap = createAsyncThunk(
  "cinema/cumrap",
  async (cumrap, { rejectWithValue }) => {
    try {
      const result = await api.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=MegaGS`, cumrap)
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const showtime = createAsyncThunk(
  "cinema/showtime",
  async (showtime, { rejectWithValue }) => {
    try {
      const result = await api.post(`QuanLyDatVe/TaoLichChieu`, showtime);
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: null,
};




const creatShowTimeReducer = createSlice({
  name: "creatShowTimeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(showtime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showtime.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(showtime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });




    builder.addCase(fecthInforCinema.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fecthInforCinema.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fecthInforCinema.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })



    builder.addCase(fecthInforCumrap.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fecthInforCumrap.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fecthInforCumrap.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },

});


export default creatShowTimeReducer.reducer;