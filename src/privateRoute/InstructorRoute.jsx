import React, { useContext } from 'react';
import { Authcontext } from '../context/Authprovider';
import { Navigate } from 'react-router-dom';


 
import CheckUserRole from '../Hook/CheckUserRole';

const InstructorRoute = () => {
    
        const {user, loadeing} = useContext(Authcontext)
        const [userRole] = CheckUserRole()
    
        if(loadeing){
            return (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
                </div>
            ) 
        }
    
        if(user && userRole === "instructor"){
            return children
        }
    
        return  <Navigate to={'/'} replace></Navigate>
    
};

export default InstructorRoute;