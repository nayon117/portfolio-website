import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 ">
                <Navbar />
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;