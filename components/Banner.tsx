"use client";
import { motion } from "framer-motion";
import Button from "./Button";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: ["0%", "100%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      yoyo: Infinity,
    },
  },
};
const slideVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
     repeat:Infinity,
     repeatType:"mirror",
      duration:20,
    },
  },
};

const Banner = () => {
  return (
    <div className="banner -z-10">
      <div className="max-w-2xl h-full m-auto">
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="h-full flex flex-col justify-center gap-10"
        >
          <motion.h1
            variants={textVariant}
            initial="initial"
            animate="animate"
            className="text-slate-100 text-2xl tracking-wide font-bold"
          >
            CRAFTING BRAND IDENTITY CAPTURING MOMENTS
          </motion.h1>
          <p className="text-slate-100">
            SINCE 2006,EXMEDIA A HAS BEEN A TRAILBLAZING ADVERTISEMENT AGENCY
          </p>
          <Button
            type="button"
            title="READ MORE"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-52 h-10 text-slate-50 rounded-3xl cursor-pointer"
          />
          <motion.img
            variants={textVariant}
            animate="scrollButton"
            className="w-12"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div className="sidingTextContainer" variants={slideVariant} initial="initial" animate="animate"> EXMEDIA </motion.div>
        <div className="h-full absolute top-0 right-0">
          <img src="/camera1.png" className="opacity-55" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
