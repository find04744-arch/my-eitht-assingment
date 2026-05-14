"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client"; // BetterAuth client
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Proxy/Loader Start

    const { email, password } = e.target.elements;

    try {
      const { data, error } = await authClient.signIn.email({
        email: email.value,
        password: password.value,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Login Successful!");
        router.push("/"); // Navigate to Home
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false); // Proxy/Loader Stop
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full rounded-xl" required />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full rounded-xl" required />
        
        <button disabled={loading} className="btn btn-primary w-full rounded-xl text-white">
          {loading ? <span className="loading loading-spinner"></span> : "Login"}
        </button>
      </form>
    </div>
  );
}