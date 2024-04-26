"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WhoWeAre = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xBg = useTransform(scrollYProgress, [0, 1], [ "0%","100%"]);
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <motion.div className="bg-[url('/stars.png')] h-screen w-screen ">
        <motion.div
          ref={ref}
          className="flex flex-col items-center justify-center p-20 "
        >
          <motion.span
            style={{ x: xBg }}
            className="text-red-500 font-black text-5xl"
          >
            WHO WE ARE
          </motion.span>
          <motion.span
            style={{ x: xBg }}
            className="text-red-500 font-black text-5xl"
          >
            EXMEDIA
          </motion.span>
          <motion.div
            style={{ x: xBg }}
            className="text-slate-50 flex flex-row text-justify "
          >
            <p className="p-10">
              Since 2006, Exmedia has been a trailblazing Advertisement agency,
              driving brand success through innovation, creativity, and
              strategic excellence. With an illustrious history, we've honed our
              craft to deliver impactful campaigns that transcend conventional
              boundaries. From dynamic visuals to compelling narratives, our
              diverse expertise in advertising, design, and branding has fueled
              the growth of numerous clients. We're not just an agency; we're
              your partners in shaping brand legacies. With a deep understanding
              of market dynamics, consumer behavior, and emerging trends,
              Exmedia is your compass to navigate the ever-evolving advertising
              landscape, ensuring your brand remains at the forefront of
              industry innovation.
            </p>
            <p className="p-10">
              Based on our strategy work, we create distinctive brand Your
              Ultimate Advertisement Company, where innovation meets creativity
              to redefine your brand's journey. Our agency stands as a pillar of
              excellence, providing a comprehensive suite of services including
              Studio, Graphics, and Branding. Step into our cutting-edge studio,
              a hub of ingenuity where ideas take shape. From brainstorming
              sessions to concept realization, our team collaborates to bring
              your vision to life. Our studio is the birthplace of dynamic
              campaigns that captivate and resonate.
            </p>
          </motion.div>
          <p className="text-slate-50 tracking-widest text-xs">
            EXMEDIA - STUDIO | GRAPHICS | BRANDING
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
