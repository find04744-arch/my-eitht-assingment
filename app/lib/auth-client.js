import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // এখানে আপনার বেইজ ইউআরএল দিন (লোকাল হোস্টের জন্য এটিই থাকবে)
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000" 
});