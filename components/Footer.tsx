"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdAttachEmail } from "react-icons/md";
import { FaMobileRetro, FaLocationDot, FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-6 bg-slate-900 h-80 overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        <div className="row-span-3 p-16">
          <img src="/exlogo.png" alt="" className="w-20 h-20" />
        </div>
        <div className="row-span-3 flex flex-col p-10 " >
          <motion.a
            href="/"
            className="text-slate-50 text-sm"
            whileHover={{ color: "red" }}
          >
            HOME
          </motion.a>
          <motion.a
            href="#"
            className="text-slate-50 text-sm"
            whileHover={{ color: "red" }}
          >
            ABOUT
          </motion.a>
          <motion.a
            href="/service"
            className="text-slate-50 text-sm"
            whileHover={{ color: "red" }}
          >
            SERVICE
          </motion.a>
          <motion.a
            href="#"
            className="text-slate-50 text-sm"
            whileHover={{ color: "red" }}
          >
            CONTACT
          </motion.a>
        </div>
        <div className="row-span-3 text-slate-50 p-10">
          <div className="flex gap-3 items-center text-sm">
            {" "}
            <MdAttachEmail /> <span>INFO@EXMEDIA.IN</span>
          </div>
          <div className="flex gap-3 items-center text-sm">
            {" "}
            <FaMobileRetro /> <span>+919526123466</span>
          </div>
          <div className="flex gap-3 items-center text-sm">
            {" "}
            <FaLocationDot /> <span>KERALA & UAE</span>
          </div>
         
        </div>
        <div className="row-span-3 text-slate-50 flex flex-col p-10 text-sm">
          <a href="#">INSTAGRAM</a>
          <a href="#">FACEBOOK</a>
          <a href="#">YOUTUBE</a>
          <a href="#">TWITTER</a>
          <a href="#">LINKED IN</a>
          <a href="#">PRINTERS</a>
          <a href="#">THREADS</a>
        </div>
        <div className="col-span-2 col-start-2 row-start-4 text-slate-50 text-xs">
          <div className="flex gap-3 items-center justify-center ">
            <FaRegCopyright /> <span>COPYRIGHT 2024 EXMEDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
