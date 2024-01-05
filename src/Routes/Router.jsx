import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Board from "../components/Board/Board";
import Setting from "../pages/Dashboard/Setting";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard/manageUsers",
                element: <Board/>
            },
            {
                path: "/dashboard/setting",
                element: <Setting/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])

export default Router