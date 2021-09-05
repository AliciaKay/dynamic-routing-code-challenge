import { createSlice } from "@reduxjs/toolkit";
import { routeSelected } from "./createActionAll";

const selectedRouteSlice = createSlice({
    name: "route",
    initialState: {
        selected: '/bios'
    },

    reducers: {
        selectedRoute : (state, action) => {
            state.selected = action.payload;
        }
    },
});

export default selectedRouteSlice.reducer;

 export const { selectedRoute } = selectedRouteSlice.actions;
