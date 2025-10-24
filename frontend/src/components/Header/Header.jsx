import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { authUser, isCheckingAuth, logout, isLoggingOut } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isCheckingAuth) {
    return (
      <header className="bg-white shadow mb-[-65px] animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="flex space-x-4">
              <div className="h-8 w-16 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow mb-[-65px] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-red-600 tracking-wide"
          >
            Roomora
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {!authUser ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm px-5 py-2.5 shadow-md transition-all"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="relative mr-[-200px]" ref={dropdownRef}>
                {/* Profile button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center space-x-2 focus:outline-none hover:bg-gray-50 px-3 py-2 rounded-lg transition"
                >
                  <img
                    src={
                      authUser.avatarUrl ||
                      "https://www.bing.com/ck/a?!&&p=1061cfad45fffe9a01e3c0078230e570727c144aa55a8dfb15e9c0c51ae3654fJmltdHM9MTc1NzExNjgwMA&ptn=3&ver=2&hsh=4&fclid=37969114-e3ab-6a91-2010-8430e2036bea&u=a1L2ltYWdlcy9zZWFyY2g_cT1wcm9maWxlK2ltYWdlK2RlZmF1bHQmaWQ9MUQ4NTcyNDc1NjFBNTFENkNCNUY5OUU2QzA3RkM1ODUyODhCRjQyNCZGT1JNPUlBQ0ZJUg&ntb=1"
                    }
                    alt="avatar"
                    className="w-9 h-9 rounded-full border border-gray-200 shadow-sm"
                  />
                  <span className="text-gray-700 font-medium hidden sm:inline">
                    {authUser.name.split(" ")[0]}
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden">
                    {/* User Info */}
                    <div className="px-4 py-4 bg-gray-50 border-b">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {authUser.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {authUser.email}
                          </p>
                          {authUser.phone && (
                            <p className="text-xs text-gray-400">
                              {authUser.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="py-2">
                      {authUser.role === "USER" && (
                        <Link
                          to="/my-bookings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                        >
                          My Bookings
                        </Link>
                      )}
                      {authUser.role === "PARTNER" && (
                        <Link
                          to="/partner-dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                        >
                          Partner Dashboard
                        </Link>
                      )}
                      {authUser.role === "ADMIN" && (
                        <Link
                          to="/admin-dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                        >
                          Admin Dashboard
                        </Link>
                      )}
                      <Link
                        to="/help"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                      >
                        Help & Support
                      </Link>
                      <button
                        disabled={isLoggingOut}
                        onClick={logout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                      >
                        {isLoggingOut ? "Logging out..." : "Logout"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
