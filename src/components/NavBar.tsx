"use client";
import {useUser} from "@auth0/nextjs-auth0/client";
import Avatar from "@/components/Avatar";

export default function NavBar() {
  const {user, isLoading} = useUser()
  return <nav
    className="sticky top-0 px-12 py-10 flex flex-row min-w-full h-24 bg-slate-900 items-center justify-between">
    <div className="w-full flex flex-row items-center justify-between px-16">
      <a href="/mydfsm">Dashboard</a>
      <a href="/mydfsm/projects">Projects</a>
      <a href="/mydfsm/finances">Finances</a>
    </div>
    <div className="w-">
      {user &&
        <Avatar user={user} isLoading={isLoading}/>
      }
    </div>
  </nav>
}