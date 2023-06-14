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
import Manageuser from "./pages/Manageuser/Manageuser";
import Manageclass from "./pages/Manageclasses/Manageclass";

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
        path:'/Dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
               {
                    path:"Myselectclass",
                    element:<Smyclass></Smyclass>
                },
                {
                    path:"enrollclass",
                    element:<SenrollClass></SenrollClass>
                },
                {
                    path:"paymentHistory",
                    element:<Mypayment></Mypayment>
                },
                {
                    path:"manageUser",
                    element:<Manageuser></Manageuser>
                },
                {
                    path:"manageclass",
                    element: <Manageclass></Manageclass>
                }
        ]},
        {
            path:'*',
            element:<Errorpage></Errorpage>
        },
  
])


export default router;