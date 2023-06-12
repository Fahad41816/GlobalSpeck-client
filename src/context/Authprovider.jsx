import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";

 
export const Authcontext = createContext()

const Authprovider = ({children}) => {

    const [user, setuser] = useState();
    const [loadeing, setloadeing] = useState(true);
    console.log(user)

    const auth = getAuth(app)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutuser = () => {
       return signOut(auth)
    }


    useEffect(() => {
        const unsubcribe =  onAuthStateChanged(auth, user => {
            setuser(user)
            setloadeing(false)
        })
        return () => {
            unsubcribe()
        };
    }, []);


    
    const contextData ={
        user,
        loadeing,
        createUser,
        loginuser,
        logoutuser
    }


    return (
        <Authcontext.Provider value={contextData}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;