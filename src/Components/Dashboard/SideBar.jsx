import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTachometerAlt,
  faCog,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../Context/Context";
import { motion as M } from "motion/react";


export default function SideBar() {
  const { menu } = useContext(MenuContext);
  return (
    <div
      className={
        menu
          ? "md:h-full md:fixed md:top-20.5 md:left-0 md:w-64 bg-white text-gray-800 p-4  shadow-xl size-fit h-full"
          : "h-full size-fit md:fixed md:top-20.5 md:left-0 bg-white text-gray-800 p-4  shadow-xl"
      }
    >
      <nav className="h-full">
        <ul className="space-y-2">
          {/* Dashboard Item with Icon */}
          <li className="p-2 rounded-lg hover:bg-gray-200/10 hover:text-orange-500 active:text-orange-300 cursor-pointer transition-colors duration-300">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3 text-lg " />
            {menu && (
              <span className="hidden md:inline-block text-lg font-sans font-extrabold">
                Dashboard
              </span>
            )}
          </li>
          {/* Sidebar Item with Font Awesome Icon */}
          <li className="p-2 rounded-lg hover:bg-gray-200/10 hover:text-orange-500 active:text-orange-300 focus:bg-gray-200 cursor-pointer transition-colors duration-300">
            <Link to={"users"}>
              <FontAwesomeIcon icon={faUsers} className="mr-3 text-lg " />{" "}
              {/* Font Awesome icon */}
              {menu && (
                <span className="hidden md:inline-block text-lg font-sans font-extrabold">
                  Users
                </span>
              )}
            </Link>
          </li>
          {/* Settings Item with Icon */}
          <li className="p-2 rounded-lg hover:bg-gray-200/10 hover:text-orange-500 active:text-orange-300 focus:bg-gray-200 cursor-pointer transition-colors duration-300">
            <FontAwesomeIcon icon={faCog} className="mr-3 text-lg" />
            {menu && (
              <span className="hidden md:inline-block text-lg font-sans font-extrabold">
                Settings
              </span>
            )}
          </li>
          {/* Notifications Item with Icon */}
          <li className="p-2 rounded-lg hover:bg-gray-200/10 hover:text-orange-500 active:text-orange-300 focus:bg-gray-200 cursor-pointer transition-colors duration-300">
            <FontAwesomeIcon icon={faBell} className="mr-3 text-lg " />
            {menu && (
              <span className="hidden md:inline-block text-lg font-sans font-extrabold">
                Notifications
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
