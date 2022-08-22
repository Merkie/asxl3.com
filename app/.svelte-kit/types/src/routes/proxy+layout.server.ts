import { auth } from '$lib/lucia';
import type { LayoutServerLoad } from "./$types";

export const load = async ({ request }: Parameters<LayoutServerLoad>[0]) => {
  try {
    const validation = await auth.validateRequestByCookie(request);
    return {success: true, data: validation.user};
  } catch(e) {
    return {success: false, data: null};
  }
}