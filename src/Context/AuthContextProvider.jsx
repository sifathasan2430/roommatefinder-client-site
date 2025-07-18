import React, { useEffect, useState } from 'react';
import UserAuthContext from './Context';
import auth from '../FireBase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
   useEffect(()=>{
const unSubScribe = onAuthStateChanged(auth, (user) => {
  if (user) {
        
   setUser(user)
   setLoading(false)
  
  } else {
   
    setUser(null)
  }
});
 return ()=>unSubScribe()

   },[])

const createNewUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
} 
const updateUserProfile=(name,photoURL)=>{
    return  updateProfile(auth.currentUser, {
  displayName: name, photoURL: photoURL
})
}
const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
const userLogOut=()=>{
    return signOut(auth)
}
const loginWithGoogle=()=>{
    return signInWithPopup(auth, provider)
}
    const data={
        user,
        setUser,
        createNewUser,
        updateUserProfile,
        userLogin,
        loginWithGoogle, 
        userLogOut,
        loading,
        setLoading
       
       
    }   
    return (
        <UserAuthContext.Provider value={data} >
            {children}
        </UserAuthContext.Provider>
    );
};

export default AuthContextProvider;