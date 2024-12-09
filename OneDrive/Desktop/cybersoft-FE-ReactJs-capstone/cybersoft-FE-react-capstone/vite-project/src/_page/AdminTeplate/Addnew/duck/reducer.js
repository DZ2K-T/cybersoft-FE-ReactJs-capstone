import { createSlice, createAsyncThunk,  } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";




export const fomrAddnew = createAsyncThunk(
    "form/addfiml",
    async (addnew, { RejectedWithValue }) => {
        try {
            const result = await api.post(`QuanLyPhim/ThemPhimUploadHinh`, addnew);
            return result.data.content;
        } catch (error) {
            return RejectedWithValue(error);
        }
    }
);

const initialState = {
    loading: false,
    data: null,
    error: null,
};


const fomrAddnewReducer = createSlice({
    name: "fomrAddnewReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fomrAddnew.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(fomrAddnew.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fomrAddnew.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export default fomrAddnewReducer.reducer;
