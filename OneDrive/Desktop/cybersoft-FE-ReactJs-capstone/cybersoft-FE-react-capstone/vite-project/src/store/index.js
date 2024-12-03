import { configureStore } from "@reduxjs/toolkit";
import listMovieReducer from "./../_page/AdminTeplate/MovieManagementPage/duck/reducer"
import fomrAddnewReducer from "./../_page/AdminTeplate/Addnew/duck/reducer"
import formEditFilmReducer from "./../_page/AdminTeplate/editFilms/duck/reducer";
import getFilmReducer from "./../_page/AdminTeplate/editFilms/duck/inforFilm"
const store = configureStore({
    reducer: {
        listMovieReducer,
        fomrAddnewReducer,
        formEditFilmReducer,
        getFilmReducer,

    },
});

export default store;