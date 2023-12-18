import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerApi from '../features/Registration';


export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registerApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query/react';
// import testApi from '../features/TestApi';


// export const store = configureStore({
//   reducer: {
//     [testApi.reducerPath]: testApi.reducer,

//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(testApi.middleware),
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// setupListeners(store.dispatch);

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
