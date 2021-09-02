import { createSlice } from "@reduxjs/toolkit";
import { booksApiCallBegan } from "./booksapi";

const slice = createSlice({
    name: "books",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        booksRequested: (books, action) => {
            books.loading = true;
        },

        booksReceived: (books, action) => {
            books.list = action.payload;
            books.loading = false;
        },

        booksRequestFailed: (books, action) => {
            books.loading = false;
        },
    },
});

export default slice.reducer;

const { booksRequested, booksReceived, booksRequestFailed } = slice.actions;

const url = "";

export const loadbooks = () => (dispatch) => {
    return dispatch(
        booksApiCallBegan({
            url,
            onStart: booksRequested.type,
            onSuccess: booksReceived.type,
            onError: booksRequestFailed.type,
        })
    );
};