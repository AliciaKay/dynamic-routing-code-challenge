import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { routesApi } from "./middleware/apiSlice";

const reducer = {
    [routesApi.reducerPath]: routesApi.reducer
}

const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routesApi.middleware)
    });

export default store