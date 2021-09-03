import { createSlice } from "@reduxjs/toolkit";
import { maintenanceApiCallBegan } from "./createActionMaintenance";

const slice = createSlice({
    name: "maintenance",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        maintenanceDataRequested: (maintenanceItems, action) => {
            maintenanceItems.loading = true;
        },

        maintenanceDataReceived: (maintenanceItems, action) => {
            maintenanceItems.list = action.payload;
            maintenanceItems.loading = false;
        },

        maintenanceDataRequestFailed: (maintenanceItems, action) => {
            maintenanceItems.loading = false;
        },
    },
});

export default slice.reducer;

const { maintenanceDataRequested, maintenanceDataReceived, maintenanceDataRequestFailed } = slice.actions;

const url = "";

export const loadmaintenancedata = () => (dispatch) => {
    return dispatch(
        maintenanceApiCallBegan({
            url,
            onStart: maintenanceDataRequested.type,
            onSuccess: maintenanceDataReceived.type,
            onError: maintenanceDataRequestFailed.type,
        })
    );
};