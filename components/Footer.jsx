import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8 px-4 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">TILES GALLERY</h2>
          <p className="text-gray-400">
            Transforming your spaces with premium aesthetic tiles. Quality and style at your doorstep.
          </p>
        </div>

        {/* Contact Us Section */}
        <div id="contact">
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" /> support@tilesgallery.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary" /> +880 1234-567890
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="btn btn-circle btn-outline btn-primary hover:text-white transition-all">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="btn btn-circle btn-outline btn-primary hover:text-white transition-all">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="btn btn-circle btn-outline btn-primary hover:text-white transition-all">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tiles Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;