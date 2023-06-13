import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Instructors from './pages/instructor/Instructors'
import Class from "./pages/class/Class";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import Errorpage from "./pages/Error/Errorpage";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Smyclass from "./pages/stdMyClass/Smyclass";
import SenrollClass from "./pages/StdEnrollClass/SenrollClass";
import Mypayment from "./pages/PaymentHistory/Mypayment";

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
            },
            {
                path:"/login",
                element: <Login></Login>
               
            },
            {
                path:"/singup",
                element: <Singup></Singup>
                 
            },
             
        ]
    },
    {
        path:'*',
        element:<Errorpage></Errorpage>
    },
    {
        path:'/Dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
           {
            path:"/Dashboard",
            element:<Smyclass></Smyclass>
           },
           {
            path:"/Dashboard/enrollclass",
            element:<SenrollClass></SenrollClass>
           },
           {
            path:"/Dashboard/paymentHistory",
            element:<Mypayment></Mypayment>
           },
        ]
    }
  
])


export default router;