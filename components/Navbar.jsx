"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // অথেন্টিকেশন সেটআপ না হওয়া পর্যন্ত এই 'user' পরিবর্তন করে ডিজাইন চেক করুন
  // লগইন অবস্থা দেখতে চাইলে true দিন, লগআউট দেখতে চাইলে false দিন
  const [user, setUser] = useState(false); 

  return (
    <nav className="sticky top-0 z-50 w-full px-4 pt-4">
      {/* Glassmorphism Effect Container */}
      <div className="navbar bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/20 rounded-[2rem] px-6 py-2 transition-all duration-300">
        
        {/* Left: Website Logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 overflow-hidden rounded-2xl shadow-inner border-2 border-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              {/* আপনার লোগোটি public ফোল্ডারে logo.png নামে থাকলে এটি কাজ করবে */}
              <img 
                src="/logo.png" 
                alt="Tiles Gallery Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-neutral leading-none">
                TILES
              </span>
              <span className="text-sm font-bold text-primary tracking-[0.2em] leading-none">
                GALLERY
              </span>
            </div>
          </Link>
        </div>

        {/* Centre: Links (Home, All Tiles, My Profile) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 font-bold text-sm uppercase tracking-widest text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/all-tiles" className="hover:text-primary transition-colors relative group">
                All Tiles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/my-profile" className="hover:text-primary transition-colors relative group">
                  My Profile
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Right: Auth Logic (Login/Logout) */}
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online ring-2 ring-primary ring-offset-2">
                <div className="w-10 rounded-full">
                  <img alt="Profile" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mahfuz" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-3 shadow-2xl bg-white rounded-2xl w-60 border border-gray-100">
                <li className="menu-title text-primary font-bold px-4 py-2">Account Menu</li>
                <li><Link href="/my-profile" className="py-3 rounded-lg hover:bg-primary/5 font-medium">My Profile Page</Link></li>
                <div className="divider my-0"></div>
                <li><button onClick={() => setUser(false)} className="py-3 rounded-lg text-red-500 hover:bg-red-50 font-bold">Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary px-8 rounded-2xl text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all border-none bg-gradient-to-r from-primary to-indigo-600">
              Login
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-2xl bg-white rounded-2xl w-64 border">
              <li><Link href="/" className="py-3 font-bold">Home</Link></li>
              <li><Link href="/all-tiles" className="py-3 font-bold">All Tiles</Link></li>
              {user && <li><Link href="/my-profile" className="py-3 font-bold">My Profile</Link></li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;