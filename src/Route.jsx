import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Instructors from './pages/instructor/Instructors'
import Class from "./pages/class/Class";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => { return fetch('http://localhost:5000/classes').then(res=> res.json())}
            },
            {
                path:"/instractor",
                element:<Instructors></Instructors>,
                loader: () => { return fetch('http://localhost:5000/Allinstructor').then(res=> res.json())}
            },
            {
                path:"/class",
                element: <Class></Class>,
                loader: () => { return fetch('http://localhost:5000/Allclasses').then(res=> res.json())}
            }
        ]
    }
  
])


export default router;