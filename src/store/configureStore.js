import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./routesreducers";
import routesApi from "./middleware/routesapi";

export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routesApi),
    });
}