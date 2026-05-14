"use client";
import { useState } from "react";
import { authClient } from "../lib/auth-client"; // আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী সঠিক পাথ
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Login failed!");
      } else {
        toast.success("Welcome back!");
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-[2.5rem] p-8 border border-white">
        <h2 className="text-4xl font-black text-center mb-10 italic">LOGIN</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input name="email" type="email" placeholder="Email" className="input input-bordered w-full pl-12 rounded-2xl bg-base-200" required />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input name="password" type="password" placeholder="Password" className="input input-bordered w-full pl-12 rounded-2xl bg-base-200" required />
          </div>
          <button disabled={loading} className="btn btn-primary w-full rounded-2xl text-white font-bold uppercase">
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>
        <p className="text-center mt-8 text-sm text-gray-500">
          Don't have an account? <Link href="/register" className="text-primary font-bold">Register</Link>
        </p>
      </div>
    </div>
  );
}