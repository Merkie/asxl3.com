import { auth } from '$lib/lucia';
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ request }) => {
  try {
    const validation = await auth.validateRequestByCookie(request);
    return {success: true, data: validation.user};
  } catch(e) {
    return {success: false, data: null};
  }
}