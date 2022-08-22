import { auth } from '$lib/lucia';

export const load = async ({ request }) => {
  try {
    await auth.validateRequest(request);
    return {validated: true};
  } catch(e) {
    console.log(e);
    return {validated: false};
  }
}