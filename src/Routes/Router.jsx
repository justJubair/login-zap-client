import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export default Router