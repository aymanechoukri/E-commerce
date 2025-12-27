import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../Context/Context";

export default function TopBar() {
  const {menu, setMenu} = useContext(MenuContext);
  return (
    <header className="bg-white shadow-md mb-2 relative">
      <nav className="container mx-auto flex items-center justify-between px-4 h-20">
        <div className="flex flex-1 items-center">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src="/Assistes/logo.png"
              alt="Logo E-Commerce"
              className="w-40"
            />
          </Link>
          <button onClick={() => setMenu(!menu)}>
             <FontAwesomeIcon icon={faBars} className="text-lg cursor-pointer hover:text-orange-500 active:text-orange-300" />
          </button>
        </div>
      </nav>
    </header>
  );
}
