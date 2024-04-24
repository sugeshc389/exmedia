// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
"use client";
import SideBar from "./SideBar";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="h-24">
      {/* SIDE BAR */}
      <SideBar />
      <div className="max-w-2xl m-auto flex items-center justify-between h-full">
        <motion.span
          className="text-slate-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          EXMEDIA
        </motion.span>
        <div className="flex gap-5">
          <a href="">
            <img className="w-5 h-5" src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img className="w-5 h-5" src="/instagram.png" alt="" />
          </a>

          <a href="">
            <img className="w-5 h-5" src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
