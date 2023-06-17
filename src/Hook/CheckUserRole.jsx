import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { Authcontext } from "../context/Authprovider";


const CheckUserRole = () => {
    
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(Authcontext)

    const {refetch, data : userRole, isLoading} = useQuery({
        queryKey:['userRole'],
        queryFn: async()=>{

            const res = await axiosSecure.get(`/user/Role/${user.email}`)
            console.log(res)
            return res.data
            

        }
    })

    return[userRole]

};

export default CheckUserRole;