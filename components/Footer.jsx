import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-black italic text-primary mb-4 uppercase">Tiles Gallery</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Elevate your living space with our premium aesthetic tiles. Quality and design at your doorstep.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3 hover:text-primary cursor-pointer transition-colors">
              <FaPhoneAlt className="text-primary" /> +880 1234 567 890
            </li>
            <li className="flex items-center gap-3 hover:text-primary cursor-pointer transition-colors">
              <FaEnvelope className="text-primary" /> support@tilesgallery.com
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-widest">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center hover:bg-primary transition-all">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center hover:bg-primary transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center hover:bg-primary transition-all">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-xs font-medium">
        © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
      </div>
    </footer>
  );
}