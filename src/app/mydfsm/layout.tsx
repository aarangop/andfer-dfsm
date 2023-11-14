import { PropsWithChildren } from "react";
import NavBar from "@/components/NavBar";

export default async function MyDfsmLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full flex flex-col">
      <NavBar></NavBar>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
