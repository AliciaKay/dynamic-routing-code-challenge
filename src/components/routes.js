import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectAllRoutes, getRoutesCall } from '../store/reducersRoutes'

import { selectedRoute } from '../store/reducersSelectedRoute';


import Generic from "./generic";


const Routes = () => {
    const dispatch = useDispatch();
    const routes = useSelector(selectAllRoutes)
    const selected = useSelector((state) => state.selected);

    useEffect(() => {
        console.log('useEffect called...', routes);
        dispatch(getRoutesCall());
    }, [dispatch]);

    const sendRouteSelection = (selection)  => {
        dispatch(selectedRoute(selection))
    }

    return (
        <div>
            <h1>Available Information:</h1>
            <ul>
                {routes.map((route, index) => (
                   <button key={route[index]} className="routeNav" onClick={() => sendRouteSelection(route[0])}>{route[1]}</button>
                ))}
            </ul> 
            <div>{selected !== '' ? <Generic /> : <span>Current Route Selected: {selected}</span>}</div>
        </div>
    );
};

export default Routes;