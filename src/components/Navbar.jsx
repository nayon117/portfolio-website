import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/loogo.png'
const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-medium text-base">
        <NavLink
          to="/ "
          className={({ isActive}) =>
              isActive ? "bg-first text-white" : ""
          }  
        >
          Portfolio
        </NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink
          to="/about "
          className={({ isActive}) =>
              isActive ? "bg-first text-white" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink
          to="/contact"  
          className={({ isActive}) =>
              isActive ? "bg-first text-white" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-third section-container shadow-md   top-0 left-0 right-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-third rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="  text-xl">
           <img className="w-8" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a href="https://github.com/nayon117" target="blank">
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/hasibul-hasan-nayon-3b35362a3/"
          target="blank"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
