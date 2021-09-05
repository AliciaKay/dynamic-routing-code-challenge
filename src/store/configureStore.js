import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import routingSlice from "./reducersRoutes";
import selectedRouteSlice from "./reducersSelectedRoute";
import { routesApi } from "./middleware/apiSlice";

const reducer = {
    [routesApi.reducerPath]: routesApi.reducer,
    routingSlice, 
    selectedRouteSlice
}

const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routesApi.middleware)
    });

export default store;