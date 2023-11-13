import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";

export default function AccessTokenProvider() {
  const loaded = useRef(false);
  const { user } = useUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      fetch("/api/auth/accessTokens")
        .then((res) => res.json())
        .then((data) => {
          console.log(`Obtained access token ${data.accessToken}`);
          dispatch(
            setCredentials({
              user: user,
              accessToken: data.accessToken,
            })
          );
        });
    } else {
      dispatch(setCredentials(null));
    }
  }, [user]);
  if (!loaded.current) {
    loaded.current = true;
  }
  return null;
}
