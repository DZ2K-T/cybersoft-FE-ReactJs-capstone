import { configureStore } from "@reduxjs/toolkit";
import listMovieReducer from "./../_page/AdminTeplate/MovieManagementPage/duck/reducer"
const store = configureStore({
    reducer: {
        listMovieReducer,
    },
});

export default store;