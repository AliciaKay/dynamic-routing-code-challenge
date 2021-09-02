import { useDispatch, useSelector } from "react-redux";
import { loadbooks } from "../store/booksreducers";
import { useEffect } from "react";


const Books = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadbooks());
    }, [dispatch]);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book, index) => (
                   <li key={book[index]}><a href={process.env.REACT_APP_BASEURL + book[0] + '.json'}>{book[1]}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default Books;