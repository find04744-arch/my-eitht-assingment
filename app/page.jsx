"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // API থেকে প্রথম ৪টি টাইলস ফেচ করা
    fetch("/api/tiles")
      .then((res) => res.json())
      .then((data) => setTiles(data.slice(0, 4)))
      .catch((err) => console.log("Error fetching tiles:", err));
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* 🏠 Banner Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Hero Background"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white italic mb-6 drop-shadow-2xl">
            Discover Your Perfect <span className="text-primary">Aesthetic</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Premium collection of tiles to transform your space into a masterpiece.
          </p>
          <Link href="/all-tiles" className="btn btn-primary btn-lg rounded-full px-10 text-white hover:scale-110 transition-all shadow-xl border-none">
            Browse Now
          </Link>
        </div>
      </section>

      {/* 🎞️ Marquee Section */}
      <div className="bg-primary py-4 shadow-inner">
        <Marquee speed={60} gradient={false} className="text-white font-bold text-lg uppercase tracking-wider">
          <span className="mx-10">New Arrivals: Ceramic Blue Tile |</span>
          <span className="mx-10">Weekly Feature: Modern Geometric Patterns |</span>
          <span className="mx-10">Join the Community & Get 10% Off! |</span>
          <span className="mx-10">Premium Italian Finish Tiles Now In Stock |</span>
        </Marquee>
      </div>

      {/* 🧱 Featured Tiles Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-neutral uppercase">Featured Tiles</h2>
            <div className="h-1.5 w-24 bg-primary mt-2 rounded-full"></div>
          </div>
          <Link href="/all-tiles" className="link link-primary font-bold hidden md:block">View All Collections &rarr;</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiles.length > 0 ? (
            tiles.map((tile) => (
              <div key={tile._id} className="card bg-base-100 shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100 rounded-3xl overflow-hidden group">
                <figure className="relative h-64 overflow-hidden">
                  <img src={tile.image} alt={tile.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 badge badge-primary p-3 font-bold">${tile.price}</div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-neutral font-black">{tile.title}</h2>
                  <p className="text-gray-500 text-sm line-clamp-2">{tile.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <Link href={`/tile/${tile._id}`} className="btn btn-outline btn-primary btn-sm rounded-xl">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <span className="loading loading-dots loading-lg text-primary"></span>
              <p className="mt-4 text-gray-500 font-bold italic">Waking up the database... Please wait.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}