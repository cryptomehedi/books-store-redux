import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Features/Books/BooksSlice";



const store = configureStore({
    reducer:{
        booksReducer: booksReducer,
    }
})

export default store