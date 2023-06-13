import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { Authcontext } from '../../context/Authprovider';
import Swal from 'sweetalert2'



const Singup = () => {

    const Navigate = useNavigate()

    const {AddUserNameAndPhoto, createUser} = useContext(Authcontext);
    const [error, seterror] = useState();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data) => {

        console.log(data)

        const Name = `${data.firstname} ${data.lastname}`


        if(data.comfirmPassword !== data.password){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' Confirm password wrong!',
                 
            })
            return

        }

        createUser(data.email, data.password)
        .then(()=>{
            AddUserNameAndPhoto(data.photoUrl,Name)
            .then(()=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account create seccessfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                Navigate('/') 

            })
            .catch(err => {
                seterror(err.message)
        })
        })
        .catch(err => {
            seterror(err.message)
        })
       
    };

    return (
    <div className='flex flex-col items-center justify-center'>
        <div className=' shadow-2xl rounded-xl p-10'>
            <h3 className='text-blue-600 text-2xl text-center mb-10 font-bold'>Sing up</h3>  
            {
                error ? <><div className="flex w-96 p-2 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div>
     {error}
  </div>
</div></> : <></>
            }      
            <form onSubmit={handleSubmit(onSubmit)} className='w-96'>
                <div className="relative z-0 w-full mb-6 group">
              
                    <input {...register("photoUrl", { required: true })} type="name"   id="potourl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="potourl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>

                    {errors.photoUrl && <span className='text-red-500 text-sm'>PhotoURL field is required</span>}

                </div>
                
                <div className="relative z-0 w-full mb-6 group">
                    <input {...register("email",{ required: true })} type="email"  id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    {errors.email && <span className='text-red-500 text-sm'>Email field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input {...register("password",{ required: true, maxLength:20, minLength:6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })} type="password"  id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    {errors.password?.type === "required" && <span className='text-red-500 text-sm'>Password field is required</span>}<br/>
                    {errors.password?.type==="minLength" && <span className='text-red-500 text-sm'>Password min length 6 charecter</span>}
                    {errors.password?.type==="maxLength" && <span className='text-red-500 text-sm'>Password max length 20 charecter</span>}
                    {errors.password?.type==="pattern" && <span className='text-red-500 text-sm'>Password must be one uppercase letter  and one lower letter</span>}
                     
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input {...register("comfirmPassword",{ required: true })} type="password"   id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    {errors.comfirmPassword && <span className='text-red-500 text-sm'>Password field is required</span>}
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register("firstname", { required: true })} type="text"   id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        {errors.firstname && <span className='text-red-500 text-sm'>firstname field is required</span>}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register("lastname", { required: true })} type="text"   id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        {errors.lastname && <span className='text-red-500 text-sm'>lastname field is required</span>}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register("phone",{ required: true })} type="tel"     id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
                        {errors.phone && <span className='text-red-500 text-sm'>phone field is required</span>}
                    </div>
                    
                </div>
                <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    </div>
    );
};

export default Singup;