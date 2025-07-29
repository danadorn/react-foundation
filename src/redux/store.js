import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./features/card/counter/counterSlice";
import { ecommerceApi } from "./api";

export const store = configureStore({
    reducer: {
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(ecommerceApi.middleware)
});
setupListeners(store.dispatch);