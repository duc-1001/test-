import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slice/authSlice";

const appReducer = combineReducers({
    auth: authReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "auth/logout") {
        // Clear the entire Redux state on logout
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth"], // Only persist auth state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
