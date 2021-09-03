import { createSlice } from "@reduxjs/toolkit";
import { routesApiCallBegan } from "./createActionRoutes";

const slice = createSlice({
    name: "routes",
    initialState: {
        list: [],
        loading: false,
        selected: ''
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

        routeSelected: (routes, action) => {
            routes.selected = action.payload;
        }
    },
});

export default slice.reducer;

const { routesRequested, routesReceived, routesRequestFailed, routeSelected } = slice.actions;

const url = '';

export const loadroutes = () => (dispatch) => {
    return dispatch(
        routesApiCallBegan({
            url,
            onStart: routesRequested.type,
            onSuccess: routesReceived.type,
            onError: routesRequestFailed.type,
            selected: routeSelected.type,
        })
    );
};