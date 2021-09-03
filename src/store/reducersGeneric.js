import { createSlice } from "@reduxjs/toolkit";
import { genericApiCallBegan } from "./createActionAll";

const genericSlice = createSlice({
    name: "generic",
    initialState: {
        genericUrl: '',
        genericList: [],
        genericLoading: false,
    },

    reducers: {
        genericDataRequested: (state, action) => {
            state.genericLoading = true;
        },

        genericDataReceived: (state, action) => {
            state.genericList = action.payload;
            state.genericLoading = false;
        },

        genericDataRequestFailed: (state, action) => {
            state.genericLoading = false;
        },
    },
});

export default genericSlice.reducer;

const { genericDataRequested, genericDataReceived, genericDataRequestFailed } = genericSlice.actions;

export const loadgenericdata = () => (dispatch) => {
    return dispatch(
        genericApiCallBegan({
            onStart: genericDataRequested.type,
            onSuccess: genericDataReceived.type,
            onError: genericDataRequestFailed.type,
        })
    );
};