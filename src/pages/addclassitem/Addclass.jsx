import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Authcontext } from '../../context/Authprovider';

const AddclassName = () => {

    const {user} = useContext(Authcontext)

    const imagetoken = "16aafcc5a553276cc8dffd870fca8231"      
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imagetoken}`

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
    
        // console.log(data)

        const fromData = new FormData()
        fromData.append('image', data.classimage[0])

        fetch(image_hosting_url, {
            method:"POST",
            body: fromData
        }).then(res => res.json())
        .then(imagedata=> {
            const imageURL = imagedata.data.display_url
            const newData = {data}
            newData.data.classimage = imageURL            
            const Data = newData.data
            console.log(Data)

            const insertData = {
                
                language: Data.className,         
                instructor: Data.instructorName,
                instructorEmail : Data.instructorEmail,
                availableSeats:parseInt(Data.AvailableSeats),
                price: parseInt(Data.price),
                enrollStudents: 0,
                image : Data.classimage,
                status: "pending",

            }
            console.log(insertData)
            fetch('http://localhost:5000/Addtoclass',
            {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(insertData)

            })
            .then(res => res.json())
            .catch(err => console.log(err))
            
        })
    };

    return (
    <>
        <div className="  shadow-lg w-1/2 border rounded-xl  p-10 ">
        <h3 className='text-center font-bold text-blue-700 text-2xl mb-10'>Add to class </h3>          
            <form  onSubmit={handleSubmit(onSubmit)}>
                 
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"  {...register("className", { required: true })}  id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" value={user?.displayName} {...register("instructorName", { required: true })} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">instructor Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" value={user?.email}  {...register("instructorEmail", { required: true })}  id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_repeat_password"  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Email</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text"  {...register("AvailableSeats", { required: true })}  id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available seats</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" {...register("price", { required: true })}  id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                </div>
                <div className="">                   
                        <label className="block mb-2 text-sm font-medium " for="user_avatar">Upload class image</label>
                        <input {...register("classimage", { required: true })} className="block w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                </div>
                
                <button type="submit" className="mt-7  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to class</button>
            </form>
            
        </div>  

    </>
    );
};

export default AddclassName;