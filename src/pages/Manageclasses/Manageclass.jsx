import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Title from '../shared/title/Title';

const Manageclass = () => {

    const {refetch, data : classes = [], isLoading} = useQuery({
        queryKey:['class'],
        queryFn:()=>{
           return fetch("http://localhost:5000/AllclassesAdmin").then(res => res.json()).catch(err => console.log(err))
        }
    })


    console.log(classes)

    return (        
    <>
            <Title title={"Manage classes "}></Title>
    <div className='mt-10'>

        {
        classes.map(data => (
            <div key={data._id} className="bg-center bg-cover flex items-center p-4 border border-gray-300 rounded mb-4">
                <img  src={data.image} alt="Class" className="w-40 h-40 bg-center bg-cover object-cover rounded-md mr-4" />
                <div className="flex-grow m-5">
                    <h2 className="text-xl font-semibold">{data.language}</h2>
                    <p className="text-gray-600"> <span className='font-semibold'>instructor : </span> {data.instructor}</p>
                    <p className="text-gray-600"> <span className='font-semibold'>instructor Email : </span> {data.instructorEmail}</p>
                    <div className="flex items-center mt-2">
                    <p className="text-gray-600 mr-4"><span className='font-semibold'>Available Seats: : </span>  {data.availableSeats}</p>
                    <p className="text-gray-600"> <span className='font-semibold'>Price:  </span>{data.price}</p>
                    </div>
                    <p className="text-gray-600 mt-2"><span className='font-semibold'>Status: </span> {data.status}</p>
                </div>
                <div className="flex flex-col">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring mb-2">
                    Approve
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring mb-2">
                    Deny
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring">
                    Send Feedback
                    </button>
                </div>
            </div>
            ))
        }
    </div>

    </>
    );
};

export default Manageclass;