import { configureStore, combineReducers } from "@reduxjs/toolkit";
import inventorySlice from "./slices/inventory/inventorySlice";

const rootReducer = combineReducers({
  inventory: inventorySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
