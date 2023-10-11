import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { pokemonApi } from "./pokemon";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    devTools: true,
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
    
})

setupListeners(store.dispatch)