import createClient from "openapi-fetch";
import { paths } from "@/lib/api/v1";
import { atom, computed } from "nanostores";

export const authToken = atom<String | undefined>();

const client = computed(authToken, (currentToken) =>
  createClient<paths>({
    baseUrl: "http://localhost:8000",
  })
);
export default client;
