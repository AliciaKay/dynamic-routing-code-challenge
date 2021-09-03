import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import { loadroutes } from "../store/reducersRoutes";
import { routeSelected } from "../store/createActionAll";
import Generic from "./generic";


const Routes = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.routesLoading)
    const routes = useSelector((state) => state.routesList);
    const selected = useSelector((state) => state.selected);

    console.log('routes at render:', routes);

    useEffect(() => {
        dispatch(loadroutes());
    }, [dispatch]);

    const sendRouteSelection = (selection)  => {
        dispatch(routeSelected(selection))
    }

    return (
        <div>
            <h1>Available Information:</h1>
            {loading !== false ? 
            <ul>
                {routes.map((route, index) => (
                   <button key={route[index]} className="routeNav" onClick={() => sendRouteSelection(route[0])}>{route[1]}</button>
                ))}
            </ul> : <h1>loading...</h1>}
            <div>{selected !== '' ? <Generic /> : <span>Current Route Selected: {selected}</span>}</div>
        </div>
    );
};

export default Routes;