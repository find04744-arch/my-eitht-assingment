import { auth } from "../../../lib/auth"; // আপনার auth.js ফাইলের পাথ ঠিক আছে তো?
import { toNextJsHandler } from "better-auth/next-js";




const handler = toNextJsHandler(auth);

export const GET = handler;
export const POST = handler;