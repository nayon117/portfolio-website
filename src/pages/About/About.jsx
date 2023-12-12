import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div>
      {/* about me part */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-4 mt-16">
        <h2 className="text-3xl border-l-4 border-black font-bold">
         <span className="ml-2"> About</span>
        </h2>
        <p className="text-xl font-medium">
          👋 I&apos;m a frontend developer passionate about crafting beautiful
          and intuitive user interfaces.
        </p>
        <p className="text-xl font-medium">
          I have a strong command of HTML, CSS, and JavaScript, utilizing these
          to bring life to web applications. With expertise in React, I build
          dynamic and responsive user interfaces.
        </p>
        <p className="text-xl font-medium">
          Additionally, I&apos;m familiar with backend technologies such as
          Node.js and Express, along with databases like MongoDB. I&apos;ve
          utilized these technologies to create full-stack applications and
          interact with databases seamlessly.
        </p>
      </motion.div>

      {/* skills part */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-16">
        <div>
          <h2 className="text-3xl border-l-4 border-black font-bold">
           <span className="ml-2"> General Skills</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          <button className="btn bg-white"><FaHtml5 className="text-orange-500 text-xl  "/> HTML5 MARKUP</button>
          <button className="btn bg-white"><FaCss3 className="text-[#2563eb] text-xl  "/>CSS3</button>
          <button className="btn bg-white"><SiTailwindcss className="text-[#14b8a6] text-xl  " />Tailwind CSS</button>
          <button className="btn bg-white"><SiJavascript className="text-yellow-500 text-xl  "/>Javascript</button>
          <button className="btn bg-white"><FaReact className="text-[#14b8a6] text-xl  "/>React</button>
          <button className="btn bg-white"><SiFirebase className="text-yellow-500 text-xl  "/>Firebase</button>
          <button className="btn bg-white"><FaFigma className="text-[#14b8a6] text-xl  "/>Figma</button>
        </div>
        <div className="mt-12">
          <h2 className="text-xl border-l-4 border-black font-bold">
           <span className="ml-2"> Familiar with</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          <button className="btn bg-white"><FaNodeJs className="text-green-500 text-xl  "/>Node</button>
          <button className="btn bg-white"><SiExpress  className="text-orange-500 text-xl  "/>Express JS</button>
          <button className="btn bg-white"><SiMongodb className="text-green-500 text-xl  "/>MongoDB</button>
          
        </div>
      </motion.div>
      
      {/* education part */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-16">
        <div>
          <h2 className="text-3xl border-l-4 border-black font-bold"><span className="ml-2">Education</span></h2>
        </div>
        <div>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end my-10">
                <time className="font-mono italic">2016-2018</time>
                <div className="text-lg font-black">SSC</div>I have completed
                SSC in 2016
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2018-2020</time>
                <div className="text-lg font-black">HSC</div>I have completed my
                HSC in 2020
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2020-current</time>
                <div className="text-lg font-black">Bachelor of Science</div>
                Department of Statistics
              </div>
              <hr />
            </li>
            <li>
              <hr />

              <hr />
            </li>
            <li>
              <hr />
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
export default About;
