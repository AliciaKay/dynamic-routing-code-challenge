import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import routesReducer from "./reducersRoutes";
import genericReducer from './reducersGeneric';
import routeSelected from './reducersSelectedRoute';

import routesApi from "./middleware/apiRoutes";

const reducer= {
    routesReducer,
    genericReducer,
    routeSelected
}

export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routesApi),
    });
}