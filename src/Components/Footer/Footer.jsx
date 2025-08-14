import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../Navbar";


const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo/>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted platform for finding and booking perfect apartments. We connect property owners with potential tenants seamlessly.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff8c00] transition-colors">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff8c00] transition-colors">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff8c00] transition-colors">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#ff8c00] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff8c00]"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-400 hover:text-[#ff8c00] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff8c00]"></span>
                  All Rooms
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#ff8c00] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff8c00]"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-gray-400 hover:text-[#ff8c00] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff8c00]"></span>
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#ff8c00] mt-1 flex-shrink-0" />
                <span>123 Rental Street, Apartment District, City 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#ff8c00]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#ff8c00]" />
                <span>support@apartmenthaven.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to get updates on new listings and special offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff8c00] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-[#ff8c00] hover:bg-[#e67e00] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Apartment Haven. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-[#ff8c00] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#ff8c00] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-[#ff8c00] text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;