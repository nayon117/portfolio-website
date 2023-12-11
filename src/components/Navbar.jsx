import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
     <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/">Home</Link></li>
      <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/about">About</Link></li>
      <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/skills">Skills</Link></li>
      <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/projects">Projects</Link></li>
      <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/contact">Contact</Link></li>
      
    </>
  );

  return (
    <div className="navbar bg-base-100">
    {/* <div className="navbar-start"> */}
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {navLinks}
        </ul>
      </div>
    {/* </div> */}
      <div className=" navbar-end lg:navbar-start">
      <a className="btn btn-ghost text-xl">N</a>
      </div>
    <div className="navbar-end hidden lg:flex ">
      <ul className="menu menu-horizontal gap-10 px-1">
       {navLinks}
      </ul>
    </div>
    
  </div>
  );
};
export default Navbar;
