import { useDispatch, useSelector } from "react-redux";
import { loadgenericdata } from "../store/reducersGeneric";
import { useEffect } from "react";



const Generic = () => {
    const dispatch = useDispatch();
    const genericItems = useSelector((state) => state.genericList);


    // useEffect(() => {
    //     dispatch(loadgenericdata());
    // }, [dispatch]);

    return (
        <div>
            <h1>Books</h1>

        </div>
    );
};

export default Generic;