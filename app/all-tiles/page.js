"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/tiles")
      .then((res) => res.json())
      .then((data) => setTiles(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  // Search logic
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200/50 pb-20">
      {/* 🔍 Hero Search Section */}
      <section className="bg-primary pt-32 pb-20 px-4 rounded-b-[3rem] shadow-2xl">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 italic">
            Find Your <span className="text-secondary">Perfect</span> Tile
          </h1>
          <div className="max-w-2xl mx-auto relative group">
            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search tiles by title (e.g. Ceramic Blue)..."
              className="input input-lg w-full pl-14 rounded-2xl shadow-xl border-none focus:ring-4 focus:ring-secondary/50 transition-all outline-none text-neutral"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 🖼️ Tiles Grid */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTiles.length > 0 ? (
            filteredTiles.map((tile) => (
              <div key={tile._id} className="card bg-base-100 shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden border border-white/20 group">
                <figure className="h-60 relative overflow-hidden">
                  <img 
                    src={tile.image} 
                    alt={tile.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 badge badge-secondary font-bold shadow-md uppercase">{tile.category}</div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-neutral font-black text-xl">{tile.title}</h2>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="text-primary font-black text-lg">${tile.price}</span>
                    <Link href={`/tile/${tile._id}`} className="btn btn-primary btn-sm rounded-xl px-6 text-white border-none shadow-lg shadow-primary/20">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-3xl shadow-inner">
              <p className="text-2xl font-bold text-gray-400 italic">No tiles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}