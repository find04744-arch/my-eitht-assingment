"use client";
import { authClient } from "../lib/auth-client"; // আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী সঠিক পাথ
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUserEdit, FaUserCircle, FaEnvelope } from "react-icons/fa";
import PrivateRoute from "../components/PrivateRoute"; // প্রাইভেট রাউট প্রোটেকশন

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  // লোডিং স্টেট হ্যান্ডেল করা
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // যদি সেশন না থাকে, PrivateRoute ও তাকে রিডাইরেক্ট করবে, তবে এখানেও সেফটি চেক রাখা ভালো
  if (!session) return null;

  const user = session.user;

  return (
    <PrivateRoute> {/* পুরো পেজটিকে প্রাইভেট রাউট দিয়ে মুড়িয়ে দেওয়া হলো */}
      <div className="min-h-screen bg-base-200 py-20 px-4 animate__animated animate__fadeIn">
        <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white">
          {/* Header/Cover Gradient */}
          <div className="h-32 bg-gradient-to-r from-primary to-indigo-600"></div>
          
          <div className="px-8 pb-10">
            {/* Profile Image */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl overflow-hidden bg-base-100 mx-auto md:mx-0">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <FaUserCircle className="w-full h-full text-gray-300" />
                )}
              </div>
            </div>

            {/* User Info */}
            <div className="text-center md:text-left mb-8">
              <h1 className="text-3xl font-black text-neutral uppercase italic tracking-tighter">
                {user.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mt-2 font-medium">
                <FaEnvelope className="text-primary" /> {user.email}
              </div>
            </div>

            <div className="divider opacity-50"></div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link 
                href="/my-profile/update" 
                className="btn btn-primary flex-1 rounded-2xl text-white font-bold gap-2 shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
              >
                <FaUserEdit /> Update Information
              </Link>
              <button 
                onClick={async () => {
                  await authClient.signOut();
                  router.push("/login");
                  router.refresh();
                }}
                className="btn btn-outline btn-error flex-1 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
              >
                Logout Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}