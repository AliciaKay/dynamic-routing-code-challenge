import { createSlice } from "@reduxjs/toolkit";
import { routeSelected } from "./createActionAll";

const selectedRouteSlice = createSlice({
    name: "route",
    initialState: {
        selected: './bios.json'
    },

    reducers: {
        selectedRoute : (state, action) => {
            state.selected = action.payload;
        }
    },
});

export default selectedRouteSlice.reducer;

 const { selectedRoute } = selectedRouteSlice.actions;


export const loadselectedroute = () => (dispatch) => {
    return dispatch({ routeSelected : selectedRoute.type })
};