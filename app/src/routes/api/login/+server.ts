import type { RequestHandler } from "@sveltejs/kit";
import { auth } from "$lib/lucia";
import type { Error } from "lucia-sveltekit";

export const POST: RequestHandler = async ({request}) => {
  const {email, password} = await request.json();
  
  // If no username or password
  if(!email || !password) {
    return new Response("Missing email or password", {status: 400});
  }

  // Create user
  try {
    const authenticateUser = await auth.authenticateUser("username", email, password);
    return new Response("success", {
      status: 200,
      // This is giving an error, it works just fine though
      headers: {
        "set-cookie": authenticateUser.cookies
      }
    })
  } catch(e) {
    const error = e as Error;
    if(error.message === "AUTH_INVALID_IDENTIFIER_TOKEN" || error.message === "AUTH_INVALID_PASSWORD") {
      return new Response(JSON.stringify({error: "Invalid email or password."}), {status: 400});
    } else {
      console.log(error);
      return new Response(JSON.stringify({error: "Unknown error"}), {status: 500});
    }
  }
}