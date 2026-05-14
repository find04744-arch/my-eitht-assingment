import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import connectDB from "./db"; 



export const auth = betterAuth({
   
    database: mongodbAdapter(await connectDB()), 
    
    emailAndPassword: {  
        enabled: true,
        
        autoSignIn: true 
    },
    
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    
    secret: process.env.BETTER_AUTH_SECRET, 
});