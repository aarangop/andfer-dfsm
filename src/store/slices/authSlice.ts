import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface Credentials {
  user: UserProfile | null;
  accessToken: string | null;
}

interface AuthSliceState {
  credentials: Credentials | null;
  user: UserProfile | null;
  accessToken: string | null;
}

const initialState = {
  credentials: null,
  user: null,
  accessToken: null,
} as AuthSliceState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile | null>) => {
      state.user = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setCredentials: (state, action: PayloadAction<Credentials | null>) => {
      state.credentials = action.payload;
    },
  },
});

export const { setCredentials, setUser, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
