import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import rootReducers from './features';

// type x = typeof rootReducers;

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// const saveSubsetFilter = createFilter('personalSlice', ['isHiddenSmallAssets']);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['localStorageSlice', 'currencySlice', 'userSlice', 'orders', 'main'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    // devTools: process.env.NODE_ENV === 'development',
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const store = makeStore();
