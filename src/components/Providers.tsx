"use client";
import React, { PropsWithChildren } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import AccessTokenProvider from "@/components/AccessTokenProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <UserProvider>
      <Provider store={store}>
        <AccessTokenProvider />
        {children}
      </Provider>
    </UserProvider>
  );
}
