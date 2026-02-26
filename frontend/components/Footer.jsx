import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">Servd 🍛</h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Servd helps you generate delicious recipes instantly using AI.
            Discover new flavors, cook smarter, and enjoy every meal.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <Facebook className="text-gray-500 hover:text-orange-500 cursor-pointer transition" />
            <Instagram className="text-gray-500 hover:text-orange-500 cursor-pointer transition" />
            <Twitter className="text-gray-500 hover:text-orange-500 cursor-pointer transition" />
            <Linkedin className="text-gray-500 hover:text-orange-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="/recipes" className="hover:text-orange-500 transition">Generate Recipe</a></li>
            <li><a href="/favorites" className="hover:text-orange-500 transition">Saved Recipes</a></li>
            <li><a href="/about" className="hover:text-orange-500 transition">About</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Categories</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-orange-500 transition">Vegetarian</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Non-Vegetarian</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Desserts</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Healthy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Get Tasty Updates 🍲</h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to receive trending recipes and cooking tips.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border border-orange-200 rounded-l-md focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 px-4 py-2 text-sm text-white rounded-r-md hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-50 text-center py-5 text-sm text-gray-600">
        © {new Date().getFullYear()} Servd. Made with 🧡 for food lovers.
      </div>
    </footer>
  );
};

export default Footer;