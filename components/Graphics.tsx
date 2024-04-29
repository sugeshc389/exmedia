import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const Graphics = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const variants = {
    initial: isMobile ? {} : {
      x: 1000,
      y: 100,
      opacity: 0,
    },
    animate: isMobile ? {} : {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView={isMobile ? "initial" : "animate"}
      className="text-slate-50 -z-10"
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-around">
        <div className="md:mr-5">
          <img src="/robotic.jpg" alt="Graphic" className="w-full h-80 md:h-96 object-cover" />
        </div>
        <div className="md:mt-20">
          <h1 className="font-thin text-center md:text-left text-3xl md:text-5xl mb-5 md:mb-0">
            <motion.b whileHover={{ color: "orange" }}>DESIGNS THAT </motion.b>{" "}
            <br />
            INSPIRE, CONNECT,
            <br /> AND LEAVE A LASTING <br /> IMPRESSION
          </h1>
        </div>
      </div>
      <div className="p-6">
        <motion.div
          whileHover={{ color: "orange" }}
          className="p-6 border border-orange-400 rounded-md"
        >
          <h2 className="text-orange-400 text-center">GRAPHICS</h2>
          <p className="text-justify">
            Introducing Exmedia Graphic Design, where imagination meets design prowess. Our Graphic studio is a playground for innovative ideas, transforming concepts into visually stunning realities. With a skilled team of designers, we craft graphics that captivate and communicate. From logos to intricate designs, our expertise spans a spectrum of visual elements. We merge artistry with strategy, ensuring each design aligns seamlessly with your brand's essence. At Exmedia, we understand the power of visuals to leave indelible impressions. Step into a world of creativity, where every pixel tells a story. Elevate your brand with Exmedia Graphic Design and make your visual identity a masterpiece.
          </p>
          <Button
            type={"button"}
            title={"READ MORE"}
            className={
              "w-28 h-11 rounded-full bg-orange-400 text-slate-950 text-base mx-auto"
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Graphics;
