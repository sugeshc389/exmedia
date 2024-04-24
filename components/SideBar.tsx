import React, { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import Links from "./Links";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col items-center bg-slate-50 text-slate-950"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0  w-96 bg-slate-50"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
