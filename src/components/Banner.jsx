import { useTypewriter } from "react-simple-typewriter";
import bannerImg from "../assets/banner.json";
import Lottie from "lottie-react";
import resume from "../../public/resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["FrontEnd Developer", "Innovative Designer", "Interface Craftsman"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  ">
      <div className="flex-1">
        <motion.h3
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium"
        >
          Hi, I am a
          <span className="font-bold text-[#b061df] ml-2">{typeEffect}</span>
        </motion.h3>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:text-xl">
          Transforming Visions into Code | Frontend Wizard Crafting User-Centric
          Experiences
        </motion.p>
        <a href={resume} download>
          <button className="btn btn-primary mt-4">Download Resume</button>
        </a>
      </div>
      <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      
        className="flex-1 ">
        <Lottie animationData={bannerImg}></Lottie>
      </motion.div>
    </div>
  );
};
export default Banner;
