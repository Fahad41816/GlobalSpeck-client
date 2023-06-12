import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => { return fetch('http://localhost:5000/classes').then(res=> res.json())}
            }
        ]
    }
  
])


export default router;