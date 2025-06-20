
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[100px] items-center">
          <Link to="/" className="text-2xl font-bold text-blue-500">
          <img src="/images/logo.PNG" alt="logo" className="h-[60px] w-auto" /></Link>

          <div className="hidden md:flex items-center space-x-10 text-lg font-semibold uppercase">
            <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 hover:text-blue-400 transition-colors duration-200 ${
                isActive ? "border-b-1 border-blue-400 text-blue-400" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 hover:text-blue-400 transition-colors duration-200 ${
                isActive ? "border-b-1 border-blue-400 text-blue-400" : ""
              }`
            }
          >
            About Us
          </NavLink>

            <div className="relative group">
              <button onClick={() => setIsServicesOpen((prev) => !prev)} className="flex items-center text-lg uppercase gap-1 group-hover:text-blue-400 focus:outline-none hover:text-blue-400">
                Services
                <span className="text-lg hover:text-blue-400">▾</span>
              </button>
              {isServicesOpen && (
              <div className="absolute group-hover:block bg-white shadow-md mt-1 rounded max-h-[250px] overflow-y-auto z-10 w-[200px] text-sm capitalize">
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Networking Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Advance Security Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">End Point Security</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Managed Wi-fi Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">ITSM Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Zero Trust(ZTNA)</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Mail Archieving Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Surveillence</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Computing</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Electrical</Link>
              </div>
              )}
            </div>

              <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1 hover:text-blue-500 transition-colors duration-200 ${
                isActive ? "border-b-1 border-blue-400 text-blue-400" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 text-xl"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4 text-sm font-semibold uppercase">
            <Link to="/" className="text-blue-400">Home</Link>
            <Link to="/about" className="text-blue-400">About Us</Link>

            <div className="group">
              <button onClick={() => setIsServicesOpen((prev) => !prev)} className="flex items-center text-blue-400 text-sm uppercase gap-1 group-hover:text-blue-400">
                Services
                <span>▾</span>
              </button>
              {isServicesOpen && (
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 rounded  max-h-[250px] overflow-y-auto z-10 w-[200px] capitalize">
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Networking Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Advance Security Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">End Point Security</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Managed Wi-fi Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">ITSM Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Zero Trust(ZTNA)</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Mail Archieving Solution</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Surveillence</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Computing</Link>
                <Link to="/service" className="block px-4 py-2 hover:bg-gray-100">Electrical</Link>
              </div>
              )}
            </div>

            <Link to="/contact"  className="text-blue-500">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
