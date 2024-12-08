import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";



export const getInforFilm = createAsyncThunk(
    "form/getfilm",
    async (param, { RejectedWithValue }) => {
        try {
            const result = await api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${param.id}`);
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


const getFilmReducer = createSlice({
    name: "getFilmReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInforFilm.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getInforFilm.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getInforFilm.rejected, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
    },
});

export default getFilmReducer.reducer;