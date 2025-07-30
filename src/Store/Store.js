import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import authReducer from '../features/auth/authSlice'
import filterReducer from '../features/filters/filterSlice'

 const persistConfig={
    key:'root',
    storage,
    whitelist:['auth'],
   blacklist: ["filters"],
 }
const rootReducer=combineReducers({
    auth:authReducer,
    filters:filterReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({
    reducer:persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor=persistStore(store)