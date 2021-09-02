import { createAction } from "@reduxjs/toolkit";

export const booksApiCallBegan = createAction("api/callBegan");
export const booksApiCallSucess = createAction("api/callSuccess");
export const booksApiCallFailed = createAction("api/callFailed");