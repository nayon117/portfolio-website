import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <Link className="text-base font-medium" to="/">
        Portfolio
      </Link>

      <Link className="text-base font-medium ml-5" to="/about">
        About
      </Link>
      <Link className="text-base font-medium ml-5" to="/contact">
        Contact
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="  text-xl">
          <img className="w-1/4" src={logo} alt="Hasibul Hasan" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a href="https://github.com/nayon117" target="blank">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/hasibul-hasan-nayon-3b35362a3/" target="blank">
          <FaLinkedin className="text-xl" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
