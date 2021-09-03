import { createSlice } from "@reduxjs/toolkit";
import { routesApiCallBegan, routeSelected } from "./createActionAll";

const routingSlice = createSlice({
    name: "routes",
    initialState: {
        routesList: [],
        routesLoading: false,
    },

    reducers: {
        routesRequested: (state, action) => {
            state.routesLoading = true;
        },

        routesReceived: (state, action) => {
            state.routesList = action.payload;
            state.routesLoading = false;
        },

        routesRequestFailed: (state, action) => {
            state.routesLoading = false;
        }
    },
});

export default routingSlice.reducer;

const { routesRequested, routesReceived, routesRequestFailed } = routingSlice.actions;

const url = routeSelected.payload;

export const loadroutes = () => (dispatch) => {
    return dispatch(
        routesApiCallBegan({
            url,
            onStart: routesRequested.type,
            onSuccess: routesReceived.type,
            onError: routesRequestFailed.type,
            selected: routeSelected.type
        })
    );
};