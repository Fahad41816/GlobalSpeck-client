import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

import { getAuth,updateProfile,GoogleAuthProvider ,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

 
export const Authcontext = createContext()

const Authprovider = ({children}) => {

    const [user, setuser] = useState();
    const [loadeing, setloadeing] = useState(true);
    console.log(user)

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutuser = () => {
       return signOut(auth)
    }

    const loginwithgoogle = () => {
        return signInWithPopup(auth, provider) 
    }

    const AddUserNameAndPhoto = (name, photoURL) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
    }

    useEffect(() => {
        const unsubcribe =  onAuthStateChanged(auth, user => {

            setuser(user)

            //jwt get set token

            if(user){
                axios.post("http://localhost:5000/Jwt",{email:user.email})
                .then(res => {
                    localStorage.setItem("access-token", res.data.token)
                }) 
            }
            localStorage.removeItem("access-token")


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
        loginwithgoogle,
        getAuth,
        logoutuser,
        AddUserNameAndPhoto
    }


    return (
        <Authcontext.Provider value={contextData}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;