import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";

export const authLogin = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const result = await api.post(`QuanLyNguoiDung/DangNhap`, user);
      const userInfo = result.data.content;

      if (userInfo.maLoaiNguoiDung === "QuanTri") {
        localStorage.setItem("USER_ADMIN", JSON.stringify(userInfo));
      } else if (userInfo.maLoaiNguoiDung === "KhachHang") {
        localStorage.setItem("USER_KHACHHANG", JSON.stringify(userInfo));
      } else {
        return rejectWithValue({
          message: "Không có quyền truy cập trang này!",
        });
      }
      return userInfo;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Đã xảy ra lỗi" }
      );
    }
  }
);
const userInfo = localStorage.getItem("USER_ADMIN")
  ? JSON.parse(localStorage.getItem("USER_ADMIN"))
  : localStorage.getItem("USER_KHACHHANG")
  ? JSON.parse(localStorage.getItem("USER_KHACHHANG"))
  : null;

const initialState = {
  loading: false,
  data: userInfo,
  error: null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authReducer.reducer;
