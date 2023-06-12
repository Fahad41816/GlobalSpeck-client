import { createContext, useEffect, useState } from "react";

 
export const Authcontext = createContext()

const Authprovider = ({children}) => {

    const [user, setuser] = useState();
    const [loadeing, setloadeing] = useState(true);
    
    
    const contextData ={

    }

    return (
        <Authcontext.Provider value={contextData}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;