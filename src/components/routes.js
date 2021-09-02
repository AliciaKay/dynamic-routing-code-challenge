import { useDispatch, useSelector } from "react-redux";
import { loadroutes } from "../store/routesreducers";
import { useEffect } from "react";


const Routes = () => {
    const dispatch = useDispatch();
    const routes = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadroutes());
    }, [dispatch]);

    return (
        <div>
            <h1>Routes</h1>
            <ul>
                {routes.map((route, index) => (
                   <li key={route[index]}><a href={process.env.REACT_APP_BASEURL + route[0] + '.json'}>{route[1]}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default Routes;