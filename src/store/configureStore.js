import { configureStore } from "@reduxjs/toolkit";
import { routesApi } from "./middleware/apiSlice";

const reducer = {
    [routesApi.reducerPath]: routesApi.reducer
}

const store = configureStore({
        reducer,
        middleware: (gDM) => gDM().concat(routesApi.middleware)
    });

export default store