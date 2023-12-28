import { configureStore } from "@reduxjs/toolkit";
import { API } from "./Api";

const reduxStore = configureStore({

    reducer: {
        [API.reducerPath]: API.reducer
    },


    middleware: mid => [...mid(), API.middleware]



})


export default reduxStore