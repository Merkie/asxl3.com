import type { RequestHandler } from "@sveltejs/kit";
import { auth } from "$lib/lucia";
import type { Error } from "lucia-sveltekit";

export const POST: RequestHandler = async ({request}) => {
  const { email, password, name } = await request.json();
  
  // If no username or password
  if(!email || !password) {
    return new Response("Missing email or password", {status: 400});
  }

  // Create user
  try {
    const createUser = await auth.createUser("username", email, {
      password,
      user_data: {
        email,
        name
      }
    })
    return new Response("success", {
      status: 200,
      // This is giving an error, it works just fine though
      headers: {
        "set-cookie": createUser.cookies
      }
    })
  } catch(e) {
    const error = e as Error;
    if(error.message === "AUTH_DUPLICATE_IDENTIFIER_TOKEN" || error.message === "AUTH_DUPLICATE_USER_DATA") {
      return new Response(JSON.stringify({error: "Email already exists"}), {status: 400});
    } else {
      return new Response(JSON.stringify({error: "Unknown error"}), {status: 500});
    }
  }
}