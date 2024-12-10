import { configureStore } from "@reduxjs/toolkit";
import listMovieReducer from "./../_page/AdminTeplate/MovieManagementPage/duck/reducer"
import fomrAddnewReducer from "./../_page/AdminTeplate/Addnew/duck/reducer"
// import formEditFilmReducer from "./../_page/AdminTeplate/editFilms/duck/reducer";
// import getFilmReducer from "./../_page/AdminTeplate/editFilms/duck/inforFilm"
import authReducer from "./../_page/AdminTeplate/_auth/duck/reducer"
import inforFilmReducer from "./../_page/AdminTeplate/inforFilms/duck/reducer"
import updateFilmReducer from "./../_page/AdminTeplate/UpdateFilm/duck/reducer"
import deleteFilmReducer from "./../_page/AdminTeplate/DeleteFilm/duck/reducer"
import listMovieReducerMovie from "./../_page/HomeTeplate/listMovie/duck/reducer"
import listMovies from "./../_page/HomeTeplate/listMovies/duck/reducer"
import dangNhap from "./../_page/HomeTeplate/dangNhap/duck/reducer"
const store = configureStore({
    reducer: {
        listMovieReducer,
        fomrAddnewReducer,
        // formEditFilmReducer,
        // getFilmReducer,
        authReducer,
        inforFilmReducer,
        updateFilmReducer,
        deleteFilmReducer,
        listMovieReducerMovie,
        listMovies,
        dangNhap,


    },
});

export default store;