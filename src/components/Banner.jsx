import { useTypewriter } from "react-simple-typewriter";
import bannerImg from "../assets/banner.png";
import resume from "../../public/Hasibul Hasan's Resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaDownload } from "react-icons/fa";


const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["FrontEnd Developer", "Innovative Designer", "Interface Craftsman"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mt-12 ">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">Hasibul Hasan |Nayon</h2>
        <motion.h3
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-xl md:text-2xl lg:text-3xl mb-3 font-medium"
        >
           I am a
          <span className="font-bold text-first ml-2">{typeEffect}</span>
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
          <button className=" bg-white border-first btn hover:bg-second hover:text-white text-second mt-6 uppercase"><FaDownload /> Resume</button>
        </a>
      </div>
      <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
        className="md:w-1/2 text-center mx-auto">
        {/* <Lottie animationData={bannerImg}></Lottie> */}
        <img className="" src={bannerImg} alt="" />
      </motion.div>
    </div>
  );
};
export default Banner;
