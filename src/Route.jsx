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
import Instructorclass from "./pages/intructorclass/Instructorclass";
import Addclass from "./pages/addclassitem/Addclass";
import Payment from "./pages/payment/Peyment";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import AdminRoute from "./privateRoute/AdminRoute";
import InstructorRoute from "./privateRoute/InstructorRoute";
import UserRoute from "./privateRoute/UserRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => { return fetch('https://globespeck.vercel.app/classes').then(res=> res.json())}
            },
            {
                path:"/instractor",
                element:<Instructors></Instructors>,
                loader: () => { return fetch('https://globespeck.vercel.app/Allinstructor').then(res=> res.json())}
            },
            {
                path:"/class",
                element: <Class></Class>,
                loader: () => { return fetch('https://globespeck.vercel.app/Allclasses').then(res=> res.json())}
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
                    path:"/Dashboard",
                    element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
                },
               {
                    path:"Myselectclass",
                    element:<UserRoute><Smyclass></Smyclass></UserRoute> 
                },
                {
                    path:"enrollclass",
                    element:<UserRoute><SenrollClass></SenrollClass></UserRoute> 
                },
                {
                    path:"paymentHistory",
                    element:<UserRoute><Mypayment></Mypayment></UserRoute> 
                },
                {
                    path:"manageUser",
                    element:<AdminRoute><Manageuser></Manageuser></AdminRoute>
                },
                {
                    path:"manageclass",
                    element: <AdminRoute><Manageclass></Manageclass></AdminRoute>
                },
                {
                    path:"instructorClass",
                    element: <InstructorRoute><Instructorclass></Instructorclass></InstructorRoute> ,
                },
                {
                    path:"Addclassitem",
                    element: <InstructorRoute><Addclass></Addclass></InstructorRoute>
                },
                {
                    path:"payment/:cart",
                    element: <UserRoute><Payment></Payment></UserRoute>,
                    loader: ({params}) => {return fetch(`https://globespeck.vercel.app/FindAddClass/${params.cart}`) }
                },

        ]},
        {
            path:'*',
            element:<Errorpage></Errorpage>
        },
  
])


export default router;