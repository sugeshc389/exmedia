import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const WhoWeAre = () => {
  const ref = useRef();
  const isMobile = useMediaQuery("(max-width: 768px)"); // Include 768px for better coverage

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      <motion.div className="bg-[url('/stars.png')] h-screen w-screen">
        <motion.div
          ref={ref}
          className={`flex flex-col items-center justify-center p-4 ${
            isMobile ? "xs:p-5 md:p-10" : "p-10" // Adjust padding for mobile
          }`}
        >
          <motion.span
            style={isMobile ? {} : { x: xBg }}
            className="text-red-500 font-black text-3xl xs:text-4xl md:text-5xl mb-4"
          >
            WHO WE ARE
          </motion.span>
          <motion.span
            style={isMobile ? {} : { x: xBg }}
            className="text-red-500 font-black text-3xl xs:text-4xl md:text-5xl mb-4"
          >
            EXMEDIA
          </motion.span>
          <motion.div
            style={isMobile ? { textAlign: 'center' } : { x: xBg }}
            className="text-slate-50 flex flex-col md:flex-row border border-orange-400 rounded-md"
          >
            <p
              className={`p-4 xs:p-5 md:p-10 ${
                isMobile ? "text-base" : "text-lg" // Adjust font size for mobile
              }`}
            >
              {/* Truncate content if needed for mobile */}
              Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies.
              With a deep understanding of market dynamics, consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.
            </p>
            <p
              className={`p-4 xs:p-5 md:p-10 ${
                isMobile ? "text-base" : "text-lg" // Adjust font size for mobile
              }`}
            >
              Based on our strategy work, we create distinctive brand Your Ultimate Advertisement Company, where innovation meets creativity to redefine your brand's journey. Our agency stands as a pillar of excellence, providing a comprehensive suite of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate.
            </p>
          </motion.div>
          <p className="text-slate-50 tracking-widest text-xs mt-4 text-center md:text-left">
            EXMEDIA - STUDIO | GRAPHICS | BRANDING
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
