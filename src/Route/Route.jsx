import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/blog/Blog";
 

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'about',
                element: <About/>
            },
            {
                path:'contact',
                element: <Contact/>
            },
            {
                path:'blog',
                element: <Blog/>
            },
          
          
        ]
        
    }
])

export default myCreatedRoute;