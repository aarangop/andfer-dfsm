import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface Credentials {
  user: UserProfile;
  accessToken: string;
}

interface AuthSliceState {
  credentials: Credentials | null;
}

const initialState = {
  credentials: null,
} as AuthSliceState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Credentials | null>) => {
      state.credentials = action.payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
