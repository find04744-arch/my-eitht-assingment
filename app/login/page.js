"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);
  const router = useRouter();

  // Email & Password Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = e.target.elements;

    try {
      const { data, error } = await authClient.signIn.email({
        email: email.value,
        password: password.value,
      });

      if (error) {
        toast.error(error.message || "Invalid credentials!");
      } else {
        toast.success("Welcome back, Mahfuz!");
        router.push("/");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = async () => {
    setSocialLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // লগইন শেষে হোম পেজে নিয়ে যাবে
      });
    } catch (err) {
      toast.error("Google login failed!");
      setSocialLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden border border-white">
        <div className="card-body p-8 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-neutral italic">Login</h2>
            <p className="text-gray-400 mt-2 font-medium">Access your Tiles Gallery account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div className="form-control">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  name="email"
                  type="email" 
                  placeholder="Email Address" 
                  className="input input-bordered w-full pl-12 rounded-2xl bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all font-medium" 
                  required 
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control">
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  name="password"
                  type="password" 
                  placeholder="Password" 
                  className="input input-bordered w-full pl-12 rounded-2xl bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all font-medium" 
                  required 
                />
              </div>
            </div>

            {/* Submit Button with Proxy/Loader */}
            <button 
              type="submit" 
              disabled={loading}
              className="btn btn-primary w-full rounded-2xl text-white font-bold shadow-lg shadow-primary/30 mt-2 border-none bg-gradient-to-r from-primary to-indigo-600 hover:scale-[1.02] active:scale-95 transition-all"
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </form>

          {/* Social Login Section */}
          <div className="divider text-xs text-gray-400 uppercase tracking-widest my-8 font-bold">Or continue with</div>

          <button 
            onClick={handleGoogleLogin}
            disabled={socialLoading}
            className="btn btn-outline w-full rounded-2xl gap-3 border-gray-200 hover:bg-base-200 hover:border-gray-300 transition-all font-bold"
          >
            {socialLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <>
                <FaGoogle className="text-red-500" /> Google
              </>
            )}
          </button>

          {/* Footer Link */}
          <p className="text-center mt-10 text-sm font-medium text-gray-500">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-bold hover:underline underline-offset-4">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}