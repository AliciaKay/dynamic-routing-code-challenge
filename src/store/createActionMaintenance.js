import { createAction } from "@reduxjs/toolkit";

export const maintenanceApiCallBegan = createAction("api/callBegan");
export const maintenanceApiCallSucess = createAction("api/callSuccess");
export const maintenanceApiCallFailed = createAction("api/callFailed");