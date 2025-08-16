import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
    isAuthPage
      ? "backdrop-blur-lg bg-white/60 shadow-lg scale-95"
      : "bg-white shadow-md"
  }`}
    >
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-600">Roomora</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <Link to="/about" className="hover:text-red-600">About</Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center hover:text-red-600"
              >
                English <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {langOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-32">
                  <a className="block px-4 py-2 hover:bg-gray-100" href="#">English</a>
                  <a className="block px-4 py-2 hover:bg-gray-100" href="#">Hindi</a>
                </div>
              )}
            </div>

            {/* Login & Signup */}
            <Link
              to="/login"
              className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Signup
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center justify-between w-full px-4 py-2"
          >
            Language <ChevronDownIcon className="w-4 h-4" />
          </button>
          {langOpen && (
            <div className="pl-6">
              <a className="block py-2 hover:bg-gray-100" href="#">English</a>
              <a className="block py-2 hover:bg-gray-100" href="#">Hindi</a>
            </div>
          )}
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
          <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Signup</Link>
        </div>
      )}

      {/* City Menu */}
      {!isAuthPage && (
        <div className="bg-gray-100 px-4 py-3 space-x-6 overflow-x-auto text-gray-700 font-medium flex items-center justify-center">
          {["Chennai", "Mumbai", "Bangalore", "Goa", "Delhi"].map((city) => (
            <a key={city} href="#" className="hover:text-red-600 whitespace-nowrap">{city}</a>
          ))}
        </div>
      )}
    </header>
  );
}
