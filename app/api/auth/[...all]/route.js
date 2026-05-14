import { auth } from "../../../lib/auth"; // আপনার auth.js ফাইলের পাথ ঠিক আছে তো?
import { toNextJsHandler } from "better-auth/next-js";

/**
 * BetterAuth-এর মেইন হ্যান্ডলার যা সব অথেন্টিকেশন রিকোয়েস্ট (Login, Register, Logout, Social)
 * অটোমেটিক কন্ট্রোল করবে।
 */

const handler = toNextJsHandler(auth);

export const GET = handler;
export const POST = handler;