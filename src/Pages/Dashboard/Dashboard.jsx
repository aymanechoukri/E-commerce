import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";
import TopBar from "../../Components/Dashboard/TopBar";
import { useContext } from "react";
import { MenuContext } from "../../Context/Context";
import { AnimatePresence } from "motion/react";


export default function Dashboard() {
  const { menu } = useContext(MenuContext);
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <AnimatePresence>
        <div className={menu ? "hidden md:block" : "fixed h-full left-0 top-20.5"}>
          <SideBar />
        </div>
        </AnimatePresence>

        {/* Main content with margin for fixed sidebar */}
        <div className="flex-1 ml-64 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
