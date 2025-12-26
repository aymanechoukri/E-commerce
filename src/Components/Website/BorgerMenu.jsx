import { motion as M, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function BorgerMenu() {
  return (
    <M.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="absolute w-full top-20 left-0 bg-white shadow-md  z-50"
    >
      <div className="flex flex-col justify-center items-center py-6 space-y-6">
        {/* Links */}
        <ul className="flex flex-col items-center space-y-4 text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-green-500 transition duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className="text-gray-700 hover:text-green-500 transition duration-200"
            >
              Product
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className="text-gray-700 hover:text-green-500 transition duration-200"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-20">
          <Link
            to="/signup"
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition font-extrabold active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className=" px-3 text-green-500 rounded  hover:text-orange-500 transition font-extrabold active:scale-95 focus:outline-none "
          >
            Log in
          </Link>
        </div>
      </div>
    </M.div>
  );
}
