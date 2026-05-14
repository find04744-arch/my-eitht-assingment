"use client";
import Link from "next/link";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    // এখানে আপনার লগইন লজিক বা BetterAuth কল হবে
    console.log("Logging in...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-[2rem] overflow-hidden border border-white/20">
        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Login to your account to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="input input-bordered w-full pl-12 rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all" 
                  required 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="input input-bordered w-full pl-12 rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-primary transition-all" 
                  required 
                />
              </div>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-full rounded-xl text-white font-bold shadow-lg shadow-primary/30 mt-4">
              Login
            </button>
          </form>

          <div className="divider text-xs text-gray-400 uppercase tracking-widest my-8">Or continue with</div>

          {/* Social Login */}
          <button className="btn btn-outline w-full rounded-xl gap-3 border-gray-200 hover:bg-base-200 hover:text-neutral">
            <FaGoogle className="text-red-500" /> Login with Google
          </button>

          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-bold hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}