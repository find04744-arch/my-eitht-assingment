"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaTag, FaPalette, FaCheckCircle, FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function TileDetails() {
  const { id } = useParams();
  const [tile, setTile] = useState(null);

  useEffect(() => {
    fetch(`/api/tiles/${id}`)
      .then((res) => res.json())
      .then((data) => setTile(data));
  }, [id]);

  if (!tile) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg text-primary"></span></div>;

  return (
    <div className="min-h-screen bg-base-100 pt-28 pb-20 px-4">
      <div className="container mx-auto">
        {/* Back Button */}
        <Link href="/all-tiles" className="btn btn-ghost gap-2 mb-8 hover:bg-primary/10 text-primary font-bold">
          <FaChevronLeft /> Back to Gallery
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 bg-base-200/50 p-6 md:p-10 rounded-[3rem] shadow-2xl border border-white">
          
          {/* 🖼️ High-Res Preview (Left) */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[600px] group">
              <img 
                src={tile.image} 
                alt={tile.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* 📝 Details Content (Right) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="badge badge-primary badge-outline font-bold mb-4 px-4 py-3">{tile.category}</div>
            <h1 className="text-4xl md:text-6xl font-black text-neutral mb-6 leading-tight">{tile.title}</h1>
            
            <div className="flex items-center gap-4 mb-8">
               <div className="avatar">
                 <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                   <img src="https://ui-avatars.com/api/?name=Admin" alt="Creator" />
                 </div>
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Created By</p>
                 <p className="font-bold text-neutral">Tiles Gallery Official</p>
               </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
              {tile.description || "This premium tile is designed to bring a modern aesthetic to your space with its unique patterns and high-quality finish."}
            </p>

            {/* Features/Tags Section */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                <FaPalette className="text-primary" />
                <span className="font-bold text-sm">Style: Modern</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                <FaCheckCircle className="text-success" />
                <span className="font-bold text-sm">In Stock</span>
              </div>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mb-10">
              <span className="badge badge-neutral gap-2 p-4 rounded-xl font-medium"><FaTag size={12}/> Minimalist</span>
              <span className="badge badge-neutral gap-2 p-4 rounded-xl font-medium"><FaTag size={12}/> {tile.category}</span>
              <span className="badge badge-neutral gap-2 p-4 rounded-xl font-medium"><FaTag size={12}/> Premium</span>
            </div>

            <button className="btn btn-primary btn-lg rounded-2xl text-white font-black shadow-xl shadow-primary/30 hover:scale-105 transition-all active:scale-95">
              Add to Collection - ${tile.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}