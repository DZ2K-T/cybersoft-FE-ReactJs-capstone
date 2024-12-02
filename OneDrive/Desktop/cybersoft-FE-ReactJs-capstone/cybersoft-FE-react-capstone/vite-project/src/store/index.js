import { configureStore } from "@reduxjs/toolkit";
import listMovieReducer from "./../_page/AdminTeplate/MovieManagementPage/duck/reducer"
import fomrAddnewReducer from "./../_page/AdminTeplate/Addnew/duck/reducer"
const store = configureStore({
    reducer: {
        listMovieReducer,
        fomrAddnewReducer,

    },
});

export default store;