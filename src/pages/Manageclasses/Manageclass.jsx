import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Title from '../shared/title/Title';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Manageclass = () => {

    const {refetch, data : classes = [], isLoading} = useQuery({
        queryKey:['class'],
        queryFn:()=>{
           return fetch("http://localhost:5000/AllclassesAdmin").then(res => res.json()).catch(err => console.log(err))
        }
    })
 
    const notify = () => toast.success('approved class', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const denynotify = () => toast.success('denied class', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    // approve class function 
    const approveclass = (id) => {

         const userid = id         
         fetch(`http://localhost:5000/ApproveClass/${userid}`,
         {
             method: "PATCH",
         }
         )
        .then(res => res.json())
        .then(()=>{
            notify()
            refetch()
        })
        .catch(err => console.log(err))
    }

   


    // not approve class function 

    const notapproveClass = async(id) =>{

        const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'feedback',
        inputPlaceholder: 'Type your feedback here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text) {         
        
        const Data = {feedback : text}

        fetch(`http://localhost:5000/notApproveClass/${id}`,
        {
            method: "PATCH",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(Data)
        }
        )
       .then(res => res.json())
       .then(()=>{
           refetch()
           denynotify()
       })
       .catch(err => console.log(err))
      }

    }
    

    return (        
    <>
            <Title title={"Manage classes "}></Title>
            <ToastContainer position="top-center" autoClose={500} hideProgressBar={false}  newestOnTop={false} closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
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
                    {data.feedback && data.status === "denied"? <><p className="text-gray-600 font-semibold mt-2"><span className='font-semibold text-blue-700'>feedback: </span> {data.feedback}</p></>:<></>}
                     
                </div>
                <div className="flex flex-col">
                    <button disabled={data.status === "approved" ? true : false  } onClick={()=>approveclass(data._id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring mb-2">
                    Approve
                    </button>
                    <button  disabled={data.status === "denied" ? true : false  } onClick={()=> notapproveClass(data._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring mb-2">
                    Deny
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