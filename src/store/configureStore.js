import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducersRoutes";


import routesApi from "./middleware/apiRoutes";
import genericApi from "./middleware/apiGeneric";


export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routesApi, genericApi),
    });
}