import skillify1 from "../assets/skillify1.jpg";
import automotive from "../assets/automotiveg.jpg";
import foodunityy from "../assets/foodunityy.jpg";
import { motion } from 'framer-motion'
import { fadeIn } from "../../variants";
const Projects = () => {
  return (
    <div>
      <div>
              <h2 className="text-3xl font-bold border-l-4 border-black">
                 <span className="ml-2"> My Latest Works</span>
              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
          className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-40" src={skillify1} alt="skillify" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Project Title: Skillify</h2>
            <p>Skillify is an advanced e-learning platform designed to offer a seamless learning experience. With a blend of user-centric features and a rich interface, it caters to both students and teachers, providing a conducive environment for learning and teaching.</p>
            <div className="card-actions flex justify-around items-center ">
            <a className="text-blue-700 underline" href="https://github.com/nayon117/skillify-client" target="blank">Client</a>
            <a className="text-blue-700 underline" href="https://github.com/nayon117/skillify-server" target="blank">Sever</a>
            <a className="text-blue-700 underline" href=" https://skillify-client.web.app/" target="blank">Live</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-40" src={foodunityy} alt="Food Unity" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project Title: Food Unity</h2>
            <p>Food Unity is a platform aimed at connecting individuals or organizations with surplus food to those in need. The project focuses on reducing food waste and addressing hunger by providing a user-friendly interface to share and request food items.</p>
            <div className="card-actions flex justify-around items-center ">
            <a className="text-blue-700 underline" href="https://github.com/nayon117/food-unity-client" target="blank">Client</a>
            <a className="text-blue-700 underline" href="https://github.com/nayon117/food-unity-server" target="blank">Sever</a>
            <a className="text-blue-700 underline" href=" https://food-unity-client.web.app/" target="blank">Live</a>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-40" src={automotive} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions flex justify-around items-center ">
            <a className="text-blue-700 underline" href="https://github.com/nayon117/automotive-gearup-client" target="blank">Client</a>
            <a className="text-blue-700 underline" href="https://github.com/nayon117/automotive-gearup-server" target="blank">Sever</a>
            <a className="text-blue-700 underline" href=" https://automotive-gearup.web.app/" target="blank">Live</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
