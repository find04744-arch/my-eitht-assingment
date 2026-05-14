"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUser, FaImage, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function UpdateProfile() {
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      // BetterAuth Documentation অনুযায়ী ইউজার আপডেট লজিক
      const { data, error } = await authClient.updateUser({
        name: name,
        image: image,
      });

      if (error) {
        toast.error(error.message || "Update failed!");
      } else {
        toast.success("Profile updated successfully!");
        router.push("/my-profile");
        router.refresh();
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-20 px-4">
      <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl p-8 border border-white">
        <Link href="/my-profile" className="btn btn-ghost btn-sm gap-2 mb-6 text-primary font-bold">
          <FaChevronLeft /> Back to Profile
        </Link>

        <h2 className="text-3xl font-black text-neutral mb-2 italic">Update Info</h2>
        <p className="text-gray-400 mb-8 font-medium">Change your profile display details</p>

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Name Field */}
          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">New Display Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                name="name"
                type="text" 
                defaultValue={session?.user?.name}
                className="input input-bordered w-full pl-12 rounded-2xl bg-base-200 border-none focus:ring-2 focus:ring-primary font-medium" 
                required 
              />
            </div>
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-widest text-gray-400">New Photo URL</label>
            <div className="relative">
              <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                name="image"
                type="url" 
                defaultValue={session?.user?.image}
                className="input input-bordered w-full pl-12 rounded-2xl bg-base-200 border-none focus:ring-2 focus:ring-primary font-medium" 
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary w-full rounded-2xl text-white font-bold shadow-lg shadow-primary/30 py-4 h-auto border-none bg-gradient-to-r from-primary to-indigo-600"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}