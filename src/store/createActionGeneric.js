import { createAction } from "@reduxjs/toolkit";

export const genericApiCallBegan = createAction("api/callBegan");
export const genericApiCallSucess = createAction("api/callSuccess");
export const genericApiCallFailed = createAction("api/callFailed");