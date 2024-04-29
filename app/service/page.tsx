import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ServiceItem {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  desc: string;
}

const Single: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref} className="flex pl-[25%] ">
      <div className="flex items-center justify-center w-[700px] h-[700px] gap-[50px] ">
        <img src={service.img} className="flex-1 h-[50%] object-cover border border-orange -z-10" alt="" />
        <motion.div style={{ translateY: y }} className="flex-1">
          <h1 className="font-extrabold">{service.title}</h1>
          <h3>{service.subTitle}</h3>
        </motion.div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="text-slate-50">
      <div ref={ref} className="relative">
        <div className="fixed left-[18rem] pt-[50px] text-center text-orange-50 text-4xl">
          <h1 className="font-extrabold">Our Services</h1>
          <motion.div style={{ scaleX }} className="h-[8px] w-[50rem] bg-white"></motion.div>
        </div>
        {service.map((item) => (
          <Single service={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
