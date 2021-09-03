import { useDispatch, useSelector } from "react-redux";
import { loadgenericdata } from "../store/reducersGeneric";
import { useEffect } from "react";



const Generic = () => {
    const dispatch = useDispatch();
    const genericItems = useSelector((state) => state.list);


    useEffect(() => {
        dispatch(loadgenericdata());
    }, [dispatch]);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {genericItems.map((item, index) => (
                   <li key={item[index]}>{item[1]}</li>
                ))}
            </ul>
        </div>
    );
};

export default Generic;