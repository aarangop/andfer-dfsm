import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/store/slices/authSlice";
import { dfsmApi } from "@/store/api/dfsmApi";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [dfsmApi.reducerPath]: dfsmApi.reducer,
  },
  // Add api middleware to enable caching, invalidation, polling, etc.
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([dfsmApi.middleware]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
