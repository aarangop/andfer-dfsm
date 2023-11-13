"use client"
import {useUser} from "@auth0/nextjs-auth0/client";

export default function Home() {
  const {user} = useUser()
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row bg-slate-900 p-16 rounded-lg shadow-md">
        {!user &&
          <h2 className="text-left">
            <a className="font-semibold hover:text-violet-300 transition-all"
               href="/api/auth/login?returnTo=/mydfsm">Log in</a>
            &nbsp;
            to start
          </h2>
        }
        {user &&
          <h2 className="text-left">
            <a className="font-semibold hover:text-violet-300 transition-all"
               href="/api/auth/logout">Log out</a>
          </h2>
        }
      </div>
    </main>
  )
}
