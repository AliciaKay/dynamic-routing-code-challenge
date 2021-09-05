import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { routesApiCallBegan, routeSelected } from "./createActionAll";
import { client } from "../store/middleware/client";

export const getRoutesCall = createAsyncThunk('allRoutes', async () => {
    const response = await client.get()
    return response.data
})

const initialState = {
    routesList: [],
    routesLoading: false,
}


const routingSlice = createSlice({
    name: "routes",
    initialState,
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

export const selectAllRoutes = state => state.routesList



// export const loadroutes = () => (dispatch) => {
//     return dispatch(
//         routesApiCallBegan({
//             onStart: routesRequested.type,
//             onSuccess: routesReceived.type,
//             onError: routesRequestFailed.type,
//         })
//     );
// };