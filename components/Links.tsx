import { NAV_LINKS } from "@/constants";
import {motion} from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },
};
const itemVariants = {
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
  }
}

const Links = () => {
  return (
    <motion.div className="absolute w-full h-full flex flex-col items-center justify-center gap-5" variants={variants}>
      {NAV_LINKS.map((item) => (
        <motion.a className="text-2xl font-bold" href={item.href} key={item.key} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
