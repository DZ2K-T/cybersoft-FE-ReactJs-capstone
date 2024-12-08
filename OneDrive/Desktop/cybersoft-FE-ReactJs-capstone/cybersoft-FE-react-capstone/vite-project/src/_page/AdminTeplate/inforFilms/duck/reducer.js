import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/apiService";


export const fecthInforFilm = createAsyncThunk(

    "inforFilm/fecthInfoFilm",
    async (idFilm, { rejectWithValue }) => {
        try {
            const result = await api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`)
            return result.data.content;
        } catch (error) {
            return rejectWithValue(error);

        }

    }


);


const initialState = {
    loading: false,
    data: null,
    error: null,
};


const inforFilmReducer = createSlice({
    name: "inforFilmReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fecthInforFilm.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fecthInforFilm.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fecthInforFilm.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default inforFilmReducer.reducer;