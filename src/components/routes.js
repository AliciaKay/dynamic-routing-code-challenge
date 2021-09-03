import { useDispatch, useSelector } from "react-redux";
import { loadroutes } from "../store/reducersRoutes";
import { useEffect } from "react";
import { routeSelected } from "../store/createActionRoutes";
import Generic from "./generic";


const Routes = () => {
    const dispatch = useDispatch();
    const routes = useSelector((state) => state.list);
    const selected = useSelector((state) => state.selected);

    useEffect(() => {
        dispatch(loadroutes());
    }, [dispatch]);

    const sendRouteSelection = (selection)  => {
        dispatch(routeSelected(selection))
    }

    return (
        <div>
            <h1>Available Information:</h1>
            <ul>
                {routes.map((route, index) => (
                   <button key={route[index]} className="routeNav" onClick={() => sendRouteSelection(route[0])}>{route[1]}</button>
                ))}
            </ul>
            <Generic /> 
        </div>
    );
};

export default Routes;