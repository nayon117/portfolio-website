import { useTypewriter } from "react-simple-typewriter";
import bannerImg from "../assets/banner.json";
import Lottie from "lottie-react";

const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["FrontEnd Developer", "Innovative Designer","Interface Craftsman"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <div className="flex items-center justify-between  ">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">
          Hi, I am a
          <span className="font-bold text-[#b061df] ml-2">{typeEffect}</span>
        </h3>
        <p className="md:text-xl">
          Transforming Visions into Code | Frontend Wizard Crafting User-Centric
          Experiences
        </p>
      </div>
      <div className="flex-1 ">
        <Lottie   animationData={bannerImg}></Lottie>
      </div>
    </div>
  );
};
export default Banner;
