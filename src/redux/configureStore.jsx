import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"; // Web ke liye localStorage use kare
import AuthSlice from "./slice/All.slice";

// Slices
const combinedReducer = combineReducers({
  blogs: AuthSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "user/logout/fulfilled") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

// Redux Persist Config
const persistConfig = {
  key: "root",
  storage: storage, // Web ke liye storage use kare
  whitelist: ["blogs"], // Sirf 'blogs' slice persist karega
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor
let persistor = persistStore(store);

// Redux Persist Clear Function
export function clearReduxPersist() {
  persistor.purge();
}

// Store Provider Component
export function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
