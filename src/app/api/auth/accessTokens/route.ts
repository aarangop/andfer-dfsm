import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@auth0/nextjs-auth0";

export async function GET(request: NextRequest) {
  const { accessToken } = await getAccessToken();
  return NextResponse.json({ accessToken: accessToken });
}
