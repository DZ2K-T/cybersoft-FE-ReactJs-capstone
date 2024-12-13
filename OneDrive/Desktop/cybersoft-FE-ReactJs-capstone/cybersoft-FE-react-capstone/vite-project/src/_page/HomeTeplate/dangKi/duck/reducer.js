import { createSlice } from '@reduxjs/toolkit';

// Initial state for registration
const initialState = {
  loading: false,
  error: null,
  success: false,
};

// Create a slice with action creators and reducers
const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } = registrationSlice.actions;

// Async action for registration
export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await fetch("https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "TokenCybersoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNDgiLCJIZXRIYW5TdHJpbmciOiIwNy8wOC8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NTQ1MjQ4MDAwMDAiLCJuYmYiOjE3MzU5MjM2MDAsImV4cCI6MTc1NDY3MjQwMH0.jXQ9JMq5NcxLxb2pZK0VbAP7EnuDyOoSnZ2HrcVWe_0",
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (data.statusCode === 200) {
      dispatch(registerSuccess());
    } else {
      dispatch(registerFailure(data.message));
    }
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export default registrationSlice.reducer;
