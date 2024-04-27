import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
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
      className="flex flex-col justify-between h-screen"
    >
      <div className="textContainer">
        <p>WE OFFER DIGITAL SOLUTIONS </p>
      </div>
      <div className="titleContainer">
        <div className="flex items-center gap-12">
          <img
            className="w-72 h-24 rounded-full object-cover"
            src="/people.webp"
            alt="people"
          />
          <h1 className="font-thin text-5xl">
            <motion.b
              whileHover={{ color: "orange" }}
              className="font-extrabold"
            >
              ELAVATE YOUR
            </motion.b>{" "}
            IMPACTS
          </h1>
        </div>
        <div className="flex items-center gap-12 pb-5">
          <h1 className="font-thin text-5xl">
            <motion.b
              whileHover={{ color: "orange" }}
              className="font-extrabold"
            >
              CONNECT BRANDS WITH
            </motion.b>{" "}
            CUSTOMERS.
          </h1>
          <Button
            type={"button"}
            title={"What We Do ?"}
            className={
              "w-52 h-16 rounded-full bg-orange-400 text-slate-950 text-base "
            }
          />
        </div>
      </div>
      <div className="listContainer p-5 ">
        <motion.div
          whileHover={{ color: "orange"}}
          className="p-5 border border-orange-400 rounded-md"
        >
          <h2 className="text-orange-400 font-bold">STUDIO</h2>
          <p className=" text-justify">
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
              "w-28 h-11 rounded-full bg-orange-400 text-slate-950 text-base"
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Graphics;
