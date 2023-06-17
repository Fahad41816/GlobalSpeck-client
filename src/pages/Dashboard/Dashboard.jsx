import React from 'react';
import { useContext } from 'react';
import {Authcontext} from '../../context/Authprovider'
import { Link, Outlet } from 'react-router-dom';



const Dashboard = () => {

    const {user} = useContext(Authcontext)

   const admin = false;  
   const instructor = false 

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-blue-700  shadow-lg shadow-blue-200">
          <div>

              <h1 className='text-center text-3xl font-bold border-b-2 text-white font-serif p-2'>Dashboard</h1>
          </div>
          <div className='flex flex-col items-center justify-center mt-10'>
              <div className=' w-28 h-28 bg-center bg-cover rounded-full'>
                  <img className='rounded-full h-full w-full bg-center bg-cover' src={user.photoURL} alt="" />
              </div>
              <div>                  <h3 className='text-lg font-bold mt-3 '>{user.displayName}</h3>
                  
              </div>
          </div>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu bg-blue-700   w-64 h-full text-base-content">
            {/* Sidebar content here */}            
            {
              admin ? 
              <>
                <Link to={'/Dashboard/manageclass'}>
                  <li className='text-white font-semibold hover:bg-blue-600 mt-5 hover:text-blue-950   text-lg border-b-2'><a>Manage Classes</a></li>
                </Link>
                <Link to={'/Dashboard/manageUser'}>
                 <li className='text-white font-semibold hover:bg-blue-600 mt-5 hover:text-blue-950   text-lg border-b-2'><a>Manage Users</a></li>
                </Link>
              </> : instructor ?
              <>
              <Link to={"/Dashboard/instructorClass"}>
                <li className='text-white font-semibold hover:bg-blue-600 mt-5 hover:text-blue-950   text-lg border-b-2'><a>My Classes</a></li>
              </Link>
              <Link to={"/Dashboard/Addclassitem"}>
                <li className='text-white font-semibold hover:bg-blue-600 mt-5 hover:text-blue-950   text-lg border-b-2'><a>Add a Class</a></li>
              </Link>
                 
              </> :
              <>
              <Link to={'/Dashboard/Myselectclass'}> 
                <li className='text-white font-semibold hover:bg-blue-600 mt-5 hover:text-blue-950   text-lg border-b-2'><a>My Selected Classes</a></li>
              </Link>
              <Link to={"/Dashboard/enrollclass"}>
                <li className='text-white font-semibold hover:bg-blue-600 mt-5 hover:text-blue-950   text-lg border-b-2'><a>My Enrolled Classes</a></li>
              </Link>
              <Link to={'/Dashboard/paymentHistory'}>
                <li className='text-white font-semibold hover:bg-blue-600 mt-5 hover:text-blue-950   text-lg border-b-2'><a>Payment History</a></li>
              </Link>
              </>
            }            
             
             
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;