import { createSlice } from "@reduxjs/toolkit";
import { routesApiCallBegan } from "./routesapi";

const slice = createSlice({
    name: "routes",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        routesRequested: (routes, action) => {
            routes.loading = true;
        },

        routesReceived: (routes, action) => {
            routes.list = action.payload;
            routes.loading = false;
        },

        routesRequestFailed: (routes, action) => {
            routes.loading = false;
        },
    },
});

export default slice.reducer;

const { routesRequested, routesReceived, routesRequestFailed } = slice.actions;

const url = "";

export const loadroutes = () => (dispatch) => {
    return dispatch(
        routesApiCallBegan({
            url,
            onStart: routesRequested.type,
            onSuccess: routesReceived.type,
            onError: routesRequestFailed.type,
        })
    );
};