import { configureStore } from "@reduxjs/toolkit";
import { characterReducer } from "./slices";

export const store = configureStore({
    reducer: {
        character: characterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;