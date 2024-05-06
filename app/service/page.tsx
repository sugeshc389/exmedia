"use client"
import React from 'react';
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
        <img
          src={service.img}
          className="flex-1 h-[50%] object-cover border border-orange -z-10"
          alt=""
        />
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

  // Define your service array
  const service: ServiceItem[] = [
    {
      id: 1,
      title: "STUDIO",
      subTitle: "VISUALIZE CONCEPTS & TRANSFORM THE BUSINESS TO SUCESS",
      img: "studio.jpg",
      desc: "Step into the dynamic realm of Exmedia Studio, where imagination and innovation converge to create captivating narratives that transcend boundaries. Nestled at the intersection of creativity and strategy, our studio is a haven where brands' stories are meticulously crafted into compelling campaigns that leave an indelible mark. Equipped with state-of-the-art technology and staffed by a team of seasoned professionals, Exmedia Studio is a crucible of limitless possibilities. From concept ideation to flawless execution, every step is infused with creativity, precision, and a profound understanding of market dynamics.",
    },
    {
      id: 2,
      title: "GRAPHICS",
      subTitle: "GRAPHICS CAN EXPLORE MORE THAN WORDS TO CUSTOMER",
      img: "future.jpg",
      desc: "Graphics are the visual language of the modern world, seamlessly merging artistry with communication. They encompass a spectrum of visual elements meticulously designed to convey messages, evoke emotions, and captivate audiences. From intricate illustrations to sleek logos, graphics serve as the visual identity of brands, forging connections that transcend words. In the realm of advertising, graphics play a pivotal role in shaping perceptions and driving engagement.",
    },
    {
      id: 3,
      title: "BRANDING",
      subTitle:
        "WITH IN A SECOND A VALUABLE CUSTOMER WILL TAKE A DECISION ABOUT YOUR COMPANY ON THE BASE OF YOUR BRAND",
      img: "branding.jpg",
      desc: "your business goals with our target. Our team works collaboratively with yours to define your corporate aim and voice, key values, and vision statements. Our comprehensive branding and messaging strategies create a blueprint for the types of brand marketing initiatives your company requirements and need to build business share and enhance revenue consistently upward.",
    },
  ];

  return (
    <div className="text-slate-50">
      <div ref={ref} className="relative">
        <div className="fixed left-[18rem] pt-[50px] text-center text-orange-50 text-4xl">
          <h1 className="font-extrabold">Our Services</h1>
          <motion.div
            style={{ scaleX }}
            className="h-[8px] w-[50rem] bg-white"
          ></motion.div>
        </div>
        {service.map((item) => (
          <Single service={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
