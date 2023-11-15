"use server";

import client, { authToken } from "@/lib/api/index";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

export async function setToken() {
  const session = await getSession();
  if (session?.accessToken) {
    authToken.set(session.accessToken);
  }
}

export async function getProjects() {
  const { GET } = client.get();
  const token = await getAccessToken();
  return await GET("/api/projects/", {
    headers: {
      Authentication: token ? `Bearer ${token.accessToken}` : "",
    },
  });
}
