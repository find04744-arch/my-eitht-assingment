import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // .env থেকে ভ্যালু নিবে, না থাকলে লোকালহোস্ট
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000" 
});