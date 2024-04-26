import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 1000,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Graphics = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="text-slate-50 bg-slate-950"
    >
      <div className="flex justify-around">
        <div>
          <img src="/robotic.jpg" alt="Graphic" className="w-fit h-96" />
        </div>
        <div className="m-5 mt-20">
          <h1 className="font-thin  text-5xl">
            <motion.b whileHover={{ color: "orange" }}>DESIGNS THAT </motion.b>{" "}
            <br />
            INSPIRE,CONNECT,
            <br /> AND LEAVE A LASTING <br /> IMPRESSION
          </h1>
        </div>
      </div>
      <div className="p-6">
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="p-6 border border-orange-400 "
        >
          <h2 className="text-orange-400">GRAPHICS</h2>
          <p className="text-justify">
            Introducing Exmedia Graphic Design, where imagination meets design
            prowess. Our Graphic studio is a playground for innovative ideas,
            transforming concepts into visually stunning realities. With a
            skilled team of designers, we craft graphics that captivate and
            communicate. From logos to intricate designs, our expertise spans a
            spectrum of visual elements. We merge artistry with strategy,
            ensuring each design aligns seamlessly with your brand's essence. At
            Exmedia, we understand the power of visuals to leave indelible
            impressions. Step into a world of creativity, where every pixel
            tells a story. Elevate your brand with Exmedia Graphic Design and
            make your visual identity a masterpiece.
          </p>
          <Button
            type={"button"}
            title={"READ MORE"}
            className={
              "w-28 h-11 rounded-full bg-orange-400 text-slate-950 text-base"
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Graphics;
