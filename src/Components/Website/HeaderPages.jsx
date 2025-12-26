import { Link } from "react-router-dom";
import BorgerMenu from "./BorgerMenu";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function HeaderPages() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-white shadow-md mb-2 relative">
      <nav className="container mx-auto flex items-center justify-between px-4 h-20">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/Assistes/logo.png"
            alt="Logo E-Commerce"
            className="w-40"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-between w-full ml-10">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="text-gray-700 border-b-2 border-transparent hover:text-green-500 hover:border-green-500 font-medium transition-all duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-700 border-b-2 border-transparent hover:text-green-500 hover:border-green-500 font-medium transition-all duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-700 border-b-2 border-transparent hover:text-green-500 hover:border-green-500 font-medium transition-all duration-200"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/signup"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-extrabold active:scale-95"
            >
              Sign up
            </Link>

            <Link
              to="/login"
              className="px-3 text-green-500 hover:text-orange-500 transition font-extrabold active:scale-95"
            >
              Log in
            </Link>
          </div>
        </div>

        {/* Burger Button */}
        <button
          className="block md:hidden text-xl font-bold"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <i className="fa-solid fa-x text-orange-500 hover:text-red-400 active:scale-95 cursor-pointer"></i>
          ) : (
            <i className="fa-solid fa-list text-green-500 hover:text-green-300 active:scale-95 cursor-pointer"></i>
          )}
        </button>
      </nav>

      {/* Burger Menu */}
      <AnimatePresence>{menu && <BorgerMenu />}</AnimatePresence>
    </header>
  );
}
