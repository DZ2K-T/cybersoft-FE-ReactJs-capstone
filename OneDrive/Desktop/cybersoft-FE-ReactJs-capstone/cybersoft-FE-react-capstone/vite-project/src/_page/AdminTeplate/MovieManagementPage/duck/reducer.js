import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/apiService"

export const fetchListMovie = createAsyncThunk(

    "listMovie/fecthListMovie",
    async () => {
        try {
            const result = await api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01`)
            return result.data.content;

        } catch (error) {
            return error;
        } finally {
            
        }
    }
);

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const listMovieReducer = createSlice({
    name: "listMovieReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListMovie.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchListMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchListMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default listMovieReducer.reducer;