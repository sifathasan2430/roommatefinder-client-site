import axios from 'axios';
import React, { useContext, useState } from 'react';
import UserAuthContext from '../../Context/Context';
import {Button} from './index'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthUser, Token } from '../../features/auth/authSlice';

const GoogleBtn = ({children}) => {
   
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {loginWithGoogle}=useContext(UserAuthContext)

const redirectByRole=(role)=>{
    if(role==='admin') return navigate('/dashboard');
    return navigate('/')
}

    const GoogleHandler=async()=>{
  try {
      const res=await loginWithGoogle()
      if (res.user){
          const {email,
  displayName,
  photoURL}=res.user
    const token=await res.user.getIdToken()
  const userInfo={
      email,
      photoURL,
      name:displayName,
      role:'user'
  }
      
         
  
             const backendRes=await   axios.post('https://roommatefinder-server-site.vercel.app/api/user',userInfo)
              
               if (backendRes.data?.user) {
          userInfo.role = backendRes.data.user?.role || 'user';
         
        }
           dispatch(AuthUser(userInfo));
            dispatch(Token(token));
            redirectByRole(userInfo.role); 
         }

        
  
  } catch (error) {
    console.log(error)
  }

}
    return (
         <Button textColor='text-gray-600'
                            onClick={GoogleHandler}
                            className="w-full  bg-white  border border-gray-300 hover:bg-gray-50 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2"
                        >
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                </g>
                            </svg>
                            {children}
                        </Button>
    );
};

export default GoogleBtn;