
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/contact";
import Viewproduct from "../components/Viewproduct/Viewproduct";



export const router = createBrowserRouter([
    {
        element: <Mainlayout/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"/products",
                element: <Products/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/view-product",
                element: <Viewproduct/>
            },
         
        ]
    }
])