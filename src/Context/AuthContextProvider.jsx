import React, { useState } from 'react';
import UserAuthContext from './Context';
import auth from '../FireBase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState(null)
    onAuthStateChanged(auth, (user) => {
  if (user) {
        
   setUser(user)
   console.log(user)
  } else {
    console.log('user logout')
    setUser(null)
  }
});

const createNewUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
} 
    const data={
        createNewUser
    }   
    return (
        <UserAuthContext.Provider value={data} >
            {children}
        </UserAuthContext.Provider>
    );
};

export default AuthContextProvider;