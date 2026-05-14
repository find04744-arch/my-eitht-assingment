"use client";
import Link from "next/link";
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";

export default function RegisterPage() {
  const handleRegister = (e) => {
    e.preventDefault();
    // রেজিস্ট্রেশন লজিক
    console.log("Registering...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl rounded-[2rem] overflow-hidden border border-white/20">
        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral">Create Account</h2>
            <p className="text-gray-500 mt-2">Join Tiles Gallery community today</p>
          </div>

          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="form-control md:col-span-1">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />
                <input type="text" placeholder="Mahfuz" className="input input-bordered w-full pl-12 rounded-xl bg-base-200 border-none" required />
              </div>
            </div>

            {/* Photo URL */}
            <div className="form-control md:col-span-1">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Photo URL</label>
              <div className="relative">
                <FaImage className="absolute left-4 top-4 text-gray-400" />
                <input type="url" placeholder="https://..." className="input input-bordered w-full pl-12 rounded-xl bg-base-200 border-none" required />
              </div>
            </div>

            {/* Email */}
            <div className="form-control md:col-span-2">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                <input type="email" placeholder="example@mail.com" className="input input-bordered w-full pl-12 rounded-xl bg-base-200 border-none" required />
              </div>
            </div>

            {/* Password */}
            <div className="form-control md:col-span-2">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-4 text-gray-400" />
                <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-12 rounded-xl bg-base-200 border-none" required />
              </div>
            </div>

            {/* Register Button */}
            <button type="submit" className="btn btn-primary w-full md:col-span-2 rounded-xl text-white font-bold shadow-lg shadow-primary/30 mt-4">
              Register Now
            </button>
          </form>

          <div className="divider text-xs text-gray-400 uppercase tracking-widest my-8">Or register with</div>

          <button className="btn btn-outline w-full rounded-xl gap-3 border-gray-200 hover:bg-base-200">
            <FaGoogle className="text-red-500" /> Sign up with Google
          </button>

          <p className="text-center mt-8 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}