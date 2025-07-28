
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import FloatingCTAButton from "./FloatingCTAButton";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <FloatingCTAButton />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-yellow-400 text-black px-2 py-1 rounded">C</span>{" "}
            CHAIVATIKA
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            From handpicked leaves to expertly crafted blends — we deliver purity,
            aroma, and heritage in every cup. Experience the art of tea with Chaivatika.
          </p>
          <div className="flex gap-4 mt-5 text-xl text-white">
            <a href="#" className="hover:text-yellow-400 transition" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400 transition" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-white/20 pb-1">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#home" className="hover:text-white">{'\u203A'} Home</a></li>
            <li><a href="#about" className="hover:text-white">{'\u203A'} About Us</a></li>
            <li><a href="#products" className="hover:text-white">{'\u203A'} Products</a></li>
            <li><a href="#factory" className="hover:text-white">{'\u203A'} Factory Tour</a></li>
            <li><a href="#contact" className="hover:text-white">{'\u203A'} Contact</a></li>
          </ul>
        </div>

        {/* Offerings */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-white/20 pb-1">
            Our Offerings
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#green-tea" className="hover:text-white">Green Tea</a></li>
            <li><a href="#black-tea" className="hover:text-white">Black Tea</a></li>
            <li><a href="#herbal-tea" className="hover:text-white">Herbal Blends</a></li>
            <li><a href="#exports" className="hover:text-white">Bulk Export</a></li>
            <li><a href="#custom" className="hover:text-white">Private Labeling</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-white/20 pb-1">
            Newsletter
          </h3>
          <p className="text-sm text-white/70 mb-3">
            Stay updated with our latest tea blends, offers, and insights.
          </p>
          <input
            type="email"
            className="p-2 rounded text-black w-full mb-3 focus:outline-none"
            placeholder="Email Address"
          />
          <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 w-full font-medium transition-all">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Chaivatika — All rights reserved.
      </div>
    </footer>
  );
}
