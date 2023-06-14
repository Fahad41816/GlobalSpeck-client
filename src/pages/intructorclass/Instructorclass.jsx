import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Authcontext } from '../../context/Authprovider';
import Title from '../shared/title/Title';

const Instructorclass = () => {

    const {user} = useContext(Authcontext)

    const email = user.email

    const {refetch, data : classes =[], isLoading} = useQuery({
        queryKey:['instructor'],
        queryFn: () => {
           return fetch(`http://localhost:5000/insMyclass?email=${email}`)
           .then(res => res.json())
           .catch(err => console.log(err))
        }
    })
    
    
    const deleteclass =(id) => {

        const userId = {id}
        fetch(`http://localhost:5000/deletClass/${userId.id}`,{
            method:"DELETE"
        }).then(res => res.json()).then(()=>{refetch()}).catch(err => console.log(err))
    }


    if(!classes.lenght){
        return (
            <h2 className='text-blue-600 text-2xl font-bold'>No class added</h2>
        )
    }

    return (
        <>
        <Title title={"My classes"}></Title>
    <div>

{
    classes.map(data => (
        <div key={data._id} href="#" className=" mt-20 relative w-full p-5 h-40 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 ">
                <div>
                    <img className="object-cover w-10 bg-cover bg-center rounded-t-lg h-auto md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={data.image} alt=""/>
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{data.language}</h5>
                    <div className="mb-3 font-normal text-gray-700 "> <span className='font-semibold'>instructor:</span> {data.instructor}</div>
                    <div className="mb-3 text-green-500 font-normal  "> <span className='font-semibold text-black'>status:</span> {data.status}</div>
                     
                    <div className='flex gap-5'>
                        <div className="mb-3 font-normal text-gray-700 "> <span className='font-semibold'>available Seats:</span> {data.availableSeats}</div>
                        <div className="mb-3 font-normal text-gray-700 "> <span className='font-semibold'>enroll Students :</span> {data.enrollStudents}</div>
                        <div className="mb-3 font-normal text-gray-700 "> <span className='font-semibold'>Price</span> {data.price}</div>
                    </div>
                        
                </div>
                <div className=''>
                    <button onClick={()=> deleteclass(data._id)} type="button" className=" absolute top-5 right-0 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaTrashAlt></FaTrashAlt></button>
                    
                </div>
        </div>
    ))
}
   
        </div>
</>        
    );
};

export default Instructorclass;