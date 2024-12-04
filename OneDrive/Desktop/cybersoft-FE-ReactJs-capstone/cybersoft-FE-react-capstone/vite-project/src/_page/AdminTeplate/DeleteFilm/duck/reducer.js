import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";


export const deleteFilm = createAsyncThunk(
    "listmovie/deletefilm",
    async (id_film, { isRejectedWithValue }) => {
        try {
            const result = await api.delete(`QuanLyPhim/XoaPhim?MaPhim=${id_film}`)
            return result.data.content;
        } catch (error) {
            return isRejectedWithValue(error);
        }
    }

);


const initialState = {
    loading: false,
    data: null,
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