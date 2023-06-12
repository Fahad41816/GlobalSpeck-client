import React from 'react';
 
import { Link } from 'react-router-dom';


const Login = () => {
    return (

    <div className='flex items-center justify-center'>       
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div className=" w-96 rounded-xl shadow-2xl p-8">
                    <h2 className="text-2xl mb-6 text-center font-bold text-blue-600">Login</h2>
                    <form >
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" htmlFor="email">
                        Email
                        </label>
                        <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                        </label>
                        <input
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        />
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
                        <button type="button" class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
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