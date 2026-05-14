"use client";
import { useState } from "react";
import { authClient } from "../../lib/auth-client"; // ২ লেভেল পেছনে গিয়ে lib ফোল্ডার
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

    try {
      const { data, error } = await authClient.user.update({
        name: e.target.name.value,
        image: e.target.image.value,
      });

      if (error) {
        toast.error(error.message || "Update failed!");
      } else {
        toast.success("Profile updated!");
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
      <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl p-8">
        <Link href="/my-profile" className="btn btn-ghost btn-sm mb-6 text-primary"><FaChevronLeft /> Back</Link>
        <h2 className="text-3xl font-black mb-8 italic">UPDATE INFO</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <input name="name" defaultValue={session?.user?.name} className="input input-bordered w-full rounded-2xl bg-base-200" placeholder="New Name" required />
          <input name="image" defaultValue={session?.user?.image} className="input input-bordered w-full rounded-2xl bg-base-200" placeholder="New Photo URL" required />
          <button disabled={loading} className="btn btn-primary w-full rounded-2xl text-white font-bold uppercase">
            {loading ? <span className="loading loading-spinner"></span> : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}