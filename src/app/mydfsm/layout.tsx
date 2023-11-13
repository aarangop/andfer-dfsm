// "use client";
import { PropsWithChildren } from "react";
import NavBar from "@/components/NavBar";
import { getAccessToken } from "@auth0/nextjs-auth0";

export default async function MyDfsmLayout({ children }: PropsWithChildren) {
  const { accessToken } = await getAccessToken();

  return (
    <div className="h-full flex flex-col">
      <NavBar></NavBar>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
