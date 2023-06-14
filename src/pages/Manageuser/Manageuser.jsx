import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Title from '../shared/title/Title';
import { FaTrashAlt } from 'react-icons/fa';
 

const Manageuser = () => {

    const {data : user = [], refetch, isLoading} = useQuery({
        queryKey:["user"],
        queryFn: () => {
           return  fetch('http://localhost:5000/user').then(res => res.json()).catch(err => console.log(err))
        }
    })

    console.log(user)

    return ( 
        <>
        <Title title={"ALL USER"}></Title>
        <div className="overflow-x-auto w-full h-full p-10">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>email</th> 
                    <th className='pl-20'>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    user.map(data => (
                    <tr key={data._id}>                   
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={data.photoUrl} alt="pic" />
                                </div>
                                </div>                         
                            </div>
                        </td>
                        <td>                    
                           <h3>{data.name}</h3>
                        </td>
                        <td>                    
                           <h3>{data.email}</h3>
                        </td>
                        <td>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Admin</button>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Instructor</button>
                             
                        </td>
                   
                    </tr>
                    ))
                }
              
                
                 
                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    
                </tr>
                </tfoot>
                
            </table>
</div>
        </>
    );
};

export default Manageuser;