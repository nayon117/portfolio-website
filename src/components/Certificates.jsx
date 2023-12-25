import js from "../assets/js.jpg";
import meta from "../assets/meta.jpg";
import proCer from "../../public/programmingHeroCertificate.pdf";
import jsCert from "../../public/js scrimba.pdf";
import metaCert from "../../public/meta frontend developer certificate.pdf";
import phcertificate from "../assets/phcertificate.jpg";

const Certificates = () => {
  return (
    <div className="my-16">
      <div>
        <h2 className="text-3xl font-bold border-l-4 border-black">
          <span className="ml-2 text-first">Certficates</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="card card-compact   bg-base-100 shadow-xl"
        >
          <figure>
            <img className="h-60" src={js} alt="JS certificate" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Javascript</h2>
            <p>
              Earned Scrimba certification in JavaScript, demonstrating
              expertise in dynamic web development. Excited to apply advanced
              scripting skills for creating interactive and responsive web
              applications.
            </p>
            <div className="card-actions justify-center">
              <a
                href={jsCert}
                target="blank"
                className="btn  border-second bg-white text-second hover:bg-second hover:text-white"
              >
                Show Certificate
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="card card-compact   bg-base-100 shadow-xl"
        >
          <figure>
            <img className="h-60" src={meta} alt="meta" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Meta Frontend Developer</h2>
            <p>
              Holder of the Meta Frontend Developer Certificate, showcasing
              mastery in creating innovative and user-centric web experiences.
              Equipped with the skills to build cutting-edge frontend solutions
              for a dynamic digital landscape.
            </p>
            <div className="card-actions justify-center">
              <a
                href={metaCert}
                target="blank"
                className="btn  border-second bg-white text-second hover:bg-second hover:text-white"
              >
                Show Certificates
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="card card-compact   bg-base-100 shadow-xl"
        >
          <figure>
            <img
              className="h-60"
              src={phcertificate}
              alt="programming hero certificate"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Complete Web Course</h2>
            <p>
              {" "}
              Certified in completed web development course by programming hero,
              showcasing proficiency in structuring content and styling web
              pages. Committed to delivering visually appealing and
              well-structured solutions.
            </p>
            <div className="card-actions justify-center">
              <a
                href={proCer}
                target="blank"
                className="btn  border-second bg-white text-second hover:bg-second hover:text-white"
              >
                Show Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificates;
