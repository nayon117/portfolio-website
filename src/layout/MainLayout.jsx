import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 ">
                <Navbar />
            </div>
            <div className="min-h-screen max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
            <Outlet></Outlet>
            </div>
            <div className="mt-16 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
            <Footer/>
           </div>
        </div>
    );
};

export default MainLayout;