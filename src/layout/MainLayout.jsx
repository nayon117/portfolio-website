import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";
import "../App.css";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
