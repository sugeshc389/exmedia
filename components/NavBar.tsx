import SideBar from "./SideBar";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="h-24">
      {/* SIDE BAR */}
      <SideBar />
      <div className="md:max-w-xl 2xl:max-w-2xl mx-auto px-4 flex items-center justify-between h-full">
        <motion.span
          className="text-slate-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-16 h-16 md:w-20 md:h-20" src="/exlogo.png" alt="" />
        </motion.span>
        <div className="flex gap-3 md:gap-5">
          <a href="">
            <img className="w-4 h-4 md:w-5 md:h-5" src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img className="w-4 h-4 md:w-5 md:h-5" src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img className="w-4 h-4 md:w-5 md:h-5" src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
