import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const Graphics = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const variants = {
    initial: isMobile ? {} : {
      x: -500,
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
      className="flex flex-col justify-between h-screen"
    >
      <div className="textContainer text-center">
        <p>WE OFFER DIGITAL SOLUTIONS </p>
      </div>
      <div className="titleContainer">
        <div className="flex flex-col items-center md:items-start gap-5 md:flex-row md:gap-12 md:pb-5">
          <img
            className="w-48 h-16 md:w-72 md:h-24 rounded-full object-cover"
            src="/people.webp"
            alt="people"
          />
          <div className="text-center md:text-left">
            <h1 className="font-thin text-3xl md:text-5xl">
              <motion.b
                whileHover={{ color: "orange" }}
                className="font-extrabold"
              >
                ELAVATE YOUR
              </motion.b>{" "}
              IMPACTS
            </h1>
            <h1 className="font-thin text-3xl md:text-5xl">
              <motion.b
                whileHover={{ color: "orange" }}
                className="font-extrabold"
              >
                CONNECT BRANDS WITH
              </motion.b>{" "}
              CUSTOMERS.
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center gap-5 md:gap-12">
          <Button
            type={"button"}
            title={"What We Do ?"}
            className={
              "w-40 h-12 rounded-full bg-orange-400 text-slate-950 text-base "
            }
          />
        </div>
      </div>
      <div className="listContainer p-5 ">
        <motion.div
          whileHover={{ color: "orange"}}
          className="p-5 border border-orange-400 rounded-md"
        >
          <h2 className="text-orange-400 font-bold text-center">
            STUDIO
          </h2>
          <p className="text-justify">
            Where Creativity Finds Its Canvas. Our Studio Is A Haven For
            Innovative Ideas, Bringing Visions To Life With Precision And
            Passion. With State-Of-The-Art Equipment And A Team Of Skilled
            Professionals, We Craft Captivating Visuals That Tell Compelling
            Stories. Whether It's Photography, Videography, Or Audio Production,
            Our Studio Is Equipped To Deliver Excellence In Every Frame And
            Note. From Concept To Execution, We Transform Concepts Into
            Breathtaking Realities That Leave Lasting Impressions. At Exmedia,
            Creativity Knows No Bounds, And Our Studio Can Convert Imagination
            Takes It To Another Unexpected Level. Step Into A World Of Boundless
            Possibilities And Let Your Brand's Story Unfold In Stunning Visual
            Brilliance.
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
