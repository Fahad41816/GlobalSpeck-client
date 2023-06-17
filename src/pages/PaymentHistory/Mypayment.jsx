import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/UseAxiosSecure";
import { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";
import Title from "../shared/title/Title";

 

const Mypayment = () => {

    const [axiosSecure]  =  useAxiosSecure()
    const {user} = useContext(Authcontext)

    const {refetch, data : payment = []} = useQuery({
        queryKey:['payment', user.email],
        queryFn: async() => {

          const res =  await axiosSecure.get(`/PaymentHistory/${user.email}`)
          return res.data
        }
    })

    console.log(payment)

    if(!payment.length){
        return(
            <><h1 className='text-2xl font-bold text-blue-600'>No payment history</h1></>
        )
    }

    return (

        <>
        <Title title={"mt payment history"}></Title>
        <div className="mt-20 grid grid-flow-row gap-5 grid-cols-1">
        {
            payment.map(pay => (
                <div key={pay._id} href="#" className="w-full p-5 h-40 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 ">
                        <img className="object-cover w-full rounded-t-lg h-auto md:h-full md:w-60 md:rounded-none md:rounded-l-lg" src={pay.cartImage} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{pay.cartName}</h5>
                            
                            <div className='flex gap-5'>
                                <div> <span className="bold-semibold">price:</span> {pay.price} </div>
                                <div> <span className="font-bold">tranjecttionId :</span>   {pay.tranjecttionId}</div>
                            </div>
                             
                        </div>                         
                    </div>
            ))
        }
        </div>
        </>  
    );
};

export default Mypayment;