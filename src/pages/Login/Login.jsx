import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash , FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/Authprovider';
import Swal from 'sweetalert2';


const Login = () => {

    const [error, seterror] = useState();
    const [showpass, setshowpass] = useState(false);
    const {loginuser, loginwithgoogle} = useContext(Authcontext)
    const Navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        loginuser(data.email, data.password).then(()=> {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login user successfull',
                showConfirmButton: false,
                timer: 1500
            })
            Navigate('/')
        })
        .catch(err => seterror(err.message))
    };



    const LoginWithGoogle = () => {

        loginwithgoogle()
        .then(data => {
            console.log(data.user)

            const userData = {
               name : data.user.displayName,
               email: data.user.email,
               photoUrl : data.user.photoURL,
               phone: null,
               role : "user",
            }

            fetch('https://globespeck.vercel.app/user', {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData)
                })
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                })
                Navigate('/')

        })
        .catch(err => console.log(err))

       

    }

    return (

    <div className='flex items-center justify-center'>       
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div className=" w-96 rounded-xl shadow-2xl p-8">
                    <h2 className="text-2xl mb-6 text-center font-bold text-blue-600">Login</h2>
                   {error? <><div className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div>
     {error}
  </div>
</div></>:<></>}
                    <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" htmlFor="email">
                        Email
                        </label>
                        <input {...register("email", {required: true})}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                         
                        />
                        {errors.email && <span className='text-red-500 text-sm'> Email field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                        </label>
                        <div className=' relative'>
                        <input {...register("password", {required:true})}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        id="password"
                        name="password"
                        type={!showpass ? "password" : "text"}
                        placeholder="Enter your password"                        
                        />                        
                        <div  className=' cursor-pointer absolute top-2 right-2'>  {!showpass ?<FaEye onClick={()=> setshowpass(true)}></FaEye>  : <FaEyeSlash onClick={()=> setshowpass(false)}></FaEyeSlash>}</div>

                        </div>
                        {errors.password && <span className='text-red-500 text-sm'>password field is required</span>}
                    </div>

                    <p>create account? <Link className='text-blue-500' to={'/singup'}>sing up</Link> </p>

                    <button
                     
                        className="w-full mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
                        type="submit"
                    >
                        Login
                    </button>
                    </form>

                    <div className='text-center h-10 flex items-center justify-center'>
                        <div className='w-32 mr-2 h-0.5 bg-slate-300'></div>
                        <p className='font-semibold text-gray-600'>OR</p>
                        <div className='ml-2 w-32 h-0.5 bg-slate-300'></div>
                    </div>

                   <div className='text-center'>
                        <button onClick={LoginWithGoogle} type="button" className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Sign in with Google
                        </button>
                   </div>

                </div>
            </div>

        </div>
    </div>
            
    );
};

export default Login;