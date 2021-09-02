import axios from "axios";
import * as actions from "../routesapi";

const routesApi =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.routesApiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } =
            action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const response = await axios.request({
                baseURL: process.env.REACT_APP_BASEURL,
                url,
                method,
                data,
            });
            // General
            dispatch(actions.routesApiCallSucess(response.data));
            // Specific
            if (onSuccess)
            var json_data = response.data;
            var result = [];
            for(var i in json_data) {
                result.push([i, json_data [i]]);}
                console.log(result)
            dispatch({ type: onSuccess, payload: result });
        } catch (error) {
            // General
            dispatch(actions.routesApiCallFailed(error.message));
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default routesApi;