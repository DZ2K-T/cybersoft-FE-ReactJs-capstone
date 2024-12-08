import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";



export const deleteFilm = createAsyncThunk(
    "listmovie/deletefilm",
    async (id_film, { rejectWithValue }) => {
        try {
            await api.delete(`QuanLyPhim/XoaPhim?MaPhim=${id_film}`)
            return id_film;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }

);


const initialState = {
    loading: false,
    data: [],
    error: null,
};


const deleteFilmReducer = createSlice({
    name: "deleteFilmReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteFilm.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteFilm.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;

        });
        builder.addCase(deleteFilm.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default deleteFilmReducer.reducer;