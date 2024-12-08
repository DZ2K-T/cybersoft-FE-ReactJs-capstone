import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";



export const formEdit = createAsyncThunk(
    "listMovie/editMovie",
    async (edit, { RejectedWithValue }) => {
        try {
            const result = await api.post(`QuanLyPhim/CapNhatPhimUpload`, edit);
            return result.data.content;
        } catch (error) {
            return RejectedWithValue(error);
        }
    }
);



const initialState = {
    loading: false,
    data: [],
    error: null,

};


const updateFilmReducer = createSlice({
    name: "updateFilmReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(formEdit.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(formEdit.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(formEdit.rejected, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
    },
});

export default updateFilmReducer.reducer;