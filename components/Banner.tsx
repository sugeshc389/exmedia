import { motion } from "framer-motion";
import Button from "./Button";
const Banner = () => {
  return (
    // <section className="relative flex flex-col w-full pb-32 md:gap-28 lg:py-1 xl:flex-row">
    //   <video className="w-full flex-1 object-cover" autoPlay loop muted>
    //     <source
    //       src="https://tecdn.b-cdn.net/img/video/Lines.mp4"
    //       type="video/mp4"
    //     />
    //   </video>
    //   <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    //     <h1  className="text-blue-400 text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,0,0,1)]  ">
    //       START STRONG WITH EFFECTIVE BRANDING
    //     </h1>
    //   </div>
    // </section>
    <div className="banner">
      <div className="max-w-2xl h-full m-auto">
        <div className="h-full flex flex-col justify-center gap-10">
          <h1 className="text-slate-100 text-2xl tracking-wide">
            CRAFTING BRAND IDENTITY CAPTURING MOMENTS
          </h1>
          <p className="text-slate-100">
            SINCE 2006,EXMEDIA A HAS BEEN A TRAILBLAZING ADVERTISEMENT AGENCY
          </p>
          <Button
            type="button"
            title="Read more"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-52 h-10 text-slate-50 rounded-3xl"
          />
          <img className="w-12" src="/scroll.png" alt="" />
        </div>
        <div className="h-full absolute top-0 right-0">
          <img src="/camera1.png" className="opacity-55" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
