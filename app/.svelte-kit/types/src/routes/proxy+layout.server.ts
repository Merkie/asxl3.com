import { auth } from '$lib/lucia';
import type { LayoutServerLoad } from "./$types";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const load = async ({ request }: Parameters<LayoutServerLoad>[0]) => {
  try {
    const validation = await auth.validateRequestByCookie(request);
    
    const user = await prisma.user.findFirst({
      where: { id: validation.user.user_id },
    });

    return {success: true, user};
  } catch(e) {
    return {success: false, user: null};
  }
}