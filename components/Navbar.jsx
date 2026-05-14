"use client";
import Link from "next/link";
import { authClient } from "../app/lib/auth-client"; 
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 🚀 Left: Website Logo with Glow */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-1">
              <span className="text-3xl font-black italic text-white tracking-tighter group-hover:text-primary transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                TILES
              </span>
              <span className="text-3xl font-black italic text-primary animate-pulse drop-shadow-[0_0_12px_rgba(var(--p),0.8)]">
                GALLERY
              </span>
            </Link>
          </div>

          {/* 🗺️ Centre: Nav Links with Glass Effect */}
          <div className="hidden lg:flex items-center space-x-8 bg-white/5 px-8 py-2 rounded-full border border-white/10">
            <Link href="/" className="text-gray-300 hover:text-white font-bold text-sm uppercase tracking-widest transition-all">Home</Link>
            <Link href="/all-tiles" className="text-gray-300 hover:text-white font-bold text-sm uppercase tracking-widest transition-all">All Tiles</Link>
            {session && (
              <Link href="/my-profile" className="text-gray-300 hover:text-primary font-bold text-sm uppercase tracking-widest transition-all">My Profile</Link>
            )}
          </div>

          {/* ⚡ Right: Glowing Auth Buttons */}
          <div className="flex items-center gap-6">
            {!session ? (
              <Link 
                href="/login" 
                className="relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_15px_rgba(var(--p),0.5)] hover:shadow-[0_0_25px_rgba(var(--p),0.8)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="avatar hidden md:block">
                  <div className="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-black overflow-hidden shadow-[0_0_10px_rgba(var(--p),0.4)]">
                    <img src={session.user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="profile" />
                  </div>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="px-6 py-2.5 text-sm font-black text-white uppercase tracking-wider border-2 border-error/50 rounded-xl hover:bg-error hover:border-error transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}