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
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-12 sticky top-0 z-50 border-b border-gray-100">
      {/* Left: Website Logo */}
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-black italic text-primary tracking-tighter">
          TILES<span className="text-neutral">GALLERY</span>
        </Link>
      </div>

      {/* Centre: Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-2">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/all-tiles" className="hover:text-primary transition-colors">All Tiles</Link></li>
          {session && (
            <li><Link href="/my-profile" className="hover:text-primary transition-colors">My Profile</Link></li>
          )}
        </ul>
      </div>

      {/* Right: Auth Buttons */}
      <div className="navbar-end">
        {!session ? (
          <Link href="/login" className="btn btn-primary btn-md rounded-2xl px-8 text-white font-bold shadow-md">
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-4">
             {/* User Avatar (Optional but professional) */}
            <div className="avatar hidden md:block">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={session.user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="profile" />
              </div>
            </div>
            <button 
              onClick={handleLogout} 
              className="btn btn-outline btn-error btn-md rounded-2xl font-bold"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}