import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const titleAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imgAnimation = {
  hidden: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  show: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const explainAnimation = {
  hidden: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  show: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Branding = () => {
  const controlsTitle = useAnimation();
  const controlsImg = useAnimation();
  const controlsExplain = useAnimation();
  const { ref, inView } = useInView();

  const isMobile = window.innerWidth <= 640; // Adjust as per your mobile breakpoint

  useEffect(() => {
    if (!isMobile && inView) {
      controlsTitle.start("show");
      controlsImg.start("show");
      controlsExplain.start("show");
    } else {
      controlsTitle.start("hidden");
      controlsImg.start("hidden");
      controlsExplain.start("hidden");
    }
  }, [controlsTitle, controlsImg, controlsExplain, inView, isMobile]);

  return (
    <div className="p-6 -z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-6 gap-4">
        <motion.div
          className="col-span-1 md:col-span-2"
          variants={titleAnimation}
          initial="hidden"
          animate={controlsTitle}
          ref={ref}
        >
          <h1 className="text-slate-50 font-thin text-xl md:text-3xl">
            <motion.b whileHover={{ color: "orange" }}>
              YOUR BRAND, YOUR STORY:
            </motion.b>{" "}
            WE SHAPE IDENTITIES WITH IMPACT
          </h1>
        </motion.div>
        <div className="row-span-5 row-start-2 text-slate-50 -z-10">
          <motion.img
            src="/hands.jpg"
            alt="art"
            className="object-cover rounded-full h-80 md:h-full"
            variants={imgAnimation}
            initial="hidden"
            animate={controlsImg}
            ref={ref}
          />
        </div>
        <div className="row-span-5 row-start-2 text-slate-50">
          <motion.div
            className="border border-orange-400 rounded-md p-5"
            variants={explainAnimation}
            initial="hidden"
            animate={controlsExplain}
            ref={ref}
          >
            <h2 className="text-orange-400 text-xl md:text-2xl">BRANDING</h2>
            <motion.p className="text-justify" whileHover={{ color: 'orange' }}>
              Welcome to Exmedia Branding, where identities come to life. Our expertise lies in shaping brands that resonate deeply and endure. With a keen understanding of market dynamics, we craft strategic brand identities that leave lasting imprints. From logos to comprehensive brand strategies, our team blends creativity with market insights to create identities that stand out. We believe in the power of authentic storytelling and meaningful connections. At Exmedia, we architect legacies. Step into a world of brand transformation, where every element speaks volumes, and consider all updated strategies to build and ensure the trust of your brand in the respective community or customer. Choose Exmedia Branding to make your mark and forge enduring relationships with your Valuable customer & audience.
            </motion.p>
            <Button
              type={"button"}
              title={"READ MORE"}
              className="w-28 h-11 rounded-full bg-orange-400 text-slate-950 text-base"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
