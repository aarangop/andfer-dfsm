import {UserProfile} from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Avatar({user, isLoading}: { user: UserProfile, isLoading?: boolean }) {

  return <div className="flex flex-row items-center justify-between space-x-2">
    {!isLoading &&
      <>
        <p>{user.nickname}</p>
        <Image className="rounded-full" src={user.picture!} alt={"User avatar"} width={40} height={40}/>
      </>
    }
    {isLoading &&
      <>
        <p className="w-30 animate-pulse bg-slate-600"></p>
        <div className="rounded-full w-[40px] h-[40px] bg-slate-600 animate-pulse"/>
      </>
    }
  </div>
}