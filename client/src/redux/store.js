import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfing = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfing, rootReducer);

export const store = configureStore({
  //reducer: { user: userReducer },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
