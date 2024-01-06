import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../configs/Firebase.config';




export const AuthContext = createContext(null)

const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const googleLogin =()=>{
       return signInWithPopup(auth, googleProvider)
    }


    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // setLoding(false)
            setUser(currentUser)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])

    


    const userInfo ={
        user,
        googleLogin,
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;