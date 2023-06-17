import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { Authcontext } from '../../context/Authprovider';
import Title from '../shared/title/Title';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 

const Smyclass = () => {
 
     const {user} = useContext(Authcontext)
    const email = user.email
    const { refetch,isLoading, error, data: classcart = [] } = useQuery({
        queryKey: ['classCart',user.email ],
        queryFn: () =>
        fetch(`http://localhost:5000/showClass?email=${email}`).then(
            (res) => res.json(),
        )
        
    })
    
    const Deletthiscart = (id) => {
        
        const classid = {id}

        fetch('http://localhost:5000/deletAddclass',
        {
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classid)
        })
        .then(res =>  res.json())
        .then(()=>refetch())
        .catch(err => console.log(err))

    }

     

    if(classcart.length === 0){


        return(
            <>
                <h1 className='text-4xl font-bold text-blue-600'>no classes added</h1>
            </>
        )




    }

    return (
<>
        <Title title={'My Selected Classes'}></Title>

        <div className='grid grid-flow-row grid-flow-col-1 p-10 gap-5'>
                           
             {
                classcart.map(cart => (
                    <div key={cart._id} href="#" className="w-full p-5 h-40 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 ">
                        <img className="object-cover w-full rounded-t-lg h-auto md:h-full md:w-60 md:rounded-none md:rounded-l-lg" src={cart.image} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{cart.language}</h5>
                            <div className="mb-3 font-normal text-gray-700 "> <span className='font-semibold'>instructor:</span> {cart.instructor}</div>
                            <div className='flex gap-5'>
                                <div className="mb-3 font-normal text-gray-700 "> <span className='font-semibold'>available Seats:</span> {cart.availableSeats}</div>
                                <div className="mb-3 font-normal text-gray-700 "> <span className='font-semibold'>enroll Students :</span> {cart.enrollStudents}</div>
                            </div>
                             
                        </div>
                        <div className='flex flex-col ml-10'>
                            <button onClick={()=> Deletthiscart(cart._id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaTrashAlt></FaTrashAlt></button>
                           <Link to={`/Dashboard/payment/${cart.accessId}`}>
                                <button   type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Pay</button>
                           </Link>
                        </div>
                    </div>
                ))
             }
        </div>
        </>    
    );
};

export default Smyclass;