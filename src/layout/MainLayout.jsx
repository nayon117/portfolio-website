import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";
import "../App.css";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen section-container">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
