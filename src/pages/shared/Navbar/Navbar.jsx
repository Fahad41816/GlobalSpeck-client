import { Link } from 'react-router-dom';
import Logo from '../../../assets/image/logo.png';
import { useContext } from 'react';
import { Authcontext } from '../../../context/Authprovider';


const Navbar = () => {

  const {user, logoutuser} = useContext(Authcontext)
 
  const LogOutUser = () => {

    logoutuser()

  }

  return (
    <div className="navbar  fixed top-0 z-50 bg-white  shadow-lg h-20 flex items-center justify-center ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          <Link to={'/'}><li><a className=" font-semibold">HOME</a></li></Link>
          <Link to={'/instractor'}><li><a className=" font-semibold">INSTRUCTORS</a></li></Link>
          <Link to={'/class'}><li><a className=" font-semibold">CLASSES</a></li></Link>
          {user? <Link><li><a className=" font-semibold">DASHBOARD</a></li></Link> : <></>}

          </ul>
        </div>
        <a className="btn btn-ghost hover:border-white normal-case text-xl">
        <img className='w-10 bg-cover bg-center' src={Logo} alt="" />
        <div className='font-bold font-mono text-blue-600 text-3xl'>Globe<span className=' text-xl text-black'>Speak</span></div></a>
      </div>
      <div className="navbar-center hidden  lg:flex ">
        <ul className="menu menu-horizontal  px-1">
          <Link><li><a className=" font-semibold">HOME</a></li></Link>
          <Link to={'/instractor'}><li><a className=" font-semibold">INSTRUCTORS</a></li></Link>
          <Link to={"/class"}><li><a className=" font-semibold">CLASSES</a></li></Link>
          {user? <Link to={'/Dashboard'}><li><a className=" font-semibold">DASHBOARD</a></li></Link> : <></>}
        </ul>
      </div>
      <div className="navbar-end mr-5">
    
          {user?  <button onClick={LogOutUser} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br     dark:focus:ring-purple-800   shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg btn btn-xl border-0 text-center  ">Log out</button>:<Link to={'login'}><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br     dark:focus:ring-purple-800   shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg btn btn-xl border-0 text-center  ">Log in</button></Link> }

      </div>
       {user? <label tabIndex={0} className="mr-5  btn btn-ghost btn-circle avatar">
        <div className="w-full rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>:<></>}
    </div>
  );
};

export default Navbar;
