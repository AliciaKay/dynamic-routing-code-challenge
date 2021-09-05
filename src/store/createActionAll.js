import { createAction } from "@reduxjs/toolkit";

export const routesApiCallBegan = createAction("api/callBegan");
export const routesApiCallSucess = createAction("api/callSuccess");
export const routesApiCallFailed = createAction("api/callFailed");
export const genericApiCallBegan = createAction("api/genericCallBegan");
export const genericApiCallSucess = createAction("api/genericCallSuccess");
export const genericApiCallFailed = createAction("api/genericCallFailed");