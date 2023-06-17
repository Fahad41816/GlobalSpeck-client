import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Title from '../shared/title/Title';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hook/UseAxiosSecure';
 

const Manageuser = () => {

 
    const [axiosSecure] = useAxiosSecure()

 
    const {data : user = [], refetch, isLoading} = useQuery({
        queryKey:["alluser"],
        queryFn: async() => {
           const res = await  axiosSecure('/user')
           console.log(res)
           return res.data
        }
    })


    const Makeupdaterole = (id, role) => {

        const userid = { id }
        const updatedata = { Updated : role}
        console.log(id)
        fetch(`https://globespeck.vercel.app/userAdmin/${userid.id}`,
        {
            method: "PATCH",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedata)
        }
        )
        .then(res => res.json())
        .then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `update to ${role}`,
                showConfirmButton: false,
                timer: 1500
              })
            refetch()
        })
        .catch(err => console.log(err))

    }

    

     

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
                           <h3>{data.name} ({data.role})</h3>
                        </td>
                        <td>                    
                           <h3>{data.email}</h3>
                        </td>
                        <td>
                            <button  onClick={() => Makeupdaterole(data._id, "admin")} disabled={data.role === "admin" ? true: false }  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Admin</button>
                            <button   onClick={() => Makeupdaterole(data._id, "instructor")} disabled={data.role === "instructor" ? true: false }  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Instructor</button>
                                
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