import type { RequestHandler } from "@sveltejs/kit";
import { writeFileSync } from "fs";
import cuid from 'cuid';


export const POST: RequestHandler = async ({request}) => {
  const {file, filename} = await request.json();

  const patchedname = `./static/images/${cuid()}.${filename.split('.').pop()}`;
  writeFileSync(patchedname, file, 'base64');

  return new Response(JSON.stringify({path: patchedname}), {status: 200});
}