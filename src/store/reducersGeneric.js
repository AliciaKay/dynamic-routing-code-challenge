import { createSlice } from "@reduxjs/toolkit";
import { genericApiCallBegan } from "./createActionGeneric";
import { routeSelected } from "./createActionRoutes"; 

const slice = createSlice({
    name: "generic",
    initialState: {
        url: routeSelected,
        list: [],
        loading: false,
    },

    reducers: {
        genericDataRequested: (genericItems, action) => {
            genericItems.loading = true;
        },

        genericDataReceived: (genericItems, action) => {
            genericItems.list = action.payload;
            genericItems.loading = false;
        },

        genericDataRequestFailed: (genericItems, action) => {
            genericItems.loading = false;
        },
    },
});

export default slice.reducer;

const { genericDataRequested, genericDataReceived, genericDataRequestFailed } = slice.actions;

const url = routeSelected;

export const loadgenericdata = () => (dispatch) => {
    return dispatch(
        genericApiCallBegan({
            url,
            onStart: genericDataRequested.type,
            onSuccess: genericDataReceived.type,
            onError: genericDataRequestFailed.type,
        })
    );
};