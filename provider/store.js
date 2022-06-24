import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import allUsersSlice from "./allUsersSlice";
import authSlice from "./authSlice";
import allRoomsSlice from "./allRoomsSlice";
import roomSlice from "./roomSlice";

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

const rootReducer = combineReducers({
  userSlice,
  allUsersSlice,
  authSlice,
  allRoomsSlice,
  roomSlice,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    version: 0,
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
