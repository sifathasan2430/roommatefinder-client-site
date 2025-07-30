import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import UserAuthContext from '../../Context/Context';
import {Button, Input} from '../Navbar/index'
import {AuthUser,Token } from '../../features/auth/authSlice';

import axios from 'axios';
import GoogleBtn from '../Navbar/GoogleBtn';

const LoginForm = () => {
  const [loading,setLoading]=useState(false)
 
    const {userLogin}=useContext(UserAuthContext)
    const navigate=useNavigate()
    const [error,setError]=useState(null)
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()

const redirectByRole=(role='user')=>{
  if (role==='admin') return navigate('/dashboard')
    return navigate('/')
}



const handleLogin=async(data)=>{
  setError('');
  setLoading(true)
    const {email,password}=data

   
   try {
     const response = await userLogin(email, password);
     if (response.user) {
    

    const { email, displayName, photoURL } = response.user;
    const token = await response.user.getIdToken(); // serializable
      const userInfo={
    email, 
    name:displayName
    , photoURL,
    role:'user'
      
}
    const res=await axios.post('https://roommatefinder-server-site.vercel.app/api/user',userInfo)
    const {user}=res.data
if (user) userInfo.role=user?.role;
if (!userInfo.role){
  return setError("Failed to retrieve user role. Try again.")
}
         dispatch(AuthUser(userInfo));
         dispatch(Token(token)); 
    
         redirectByRole(userInfo?.role)
      
    
  }
} catch (error) {
  setError(error.message); 
} finally{
  setLoading(false)
}

}


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
          
              Find your perfect room
           
          </p>
        </div>

        {/* User Type Toggle */}
        
{
  error && <p className='text-xl text-red-700'>{error}</p>
}
        <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
               
              <Input
                 label='Email:'
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                placeholder="enter your email" type='email'
                {...register('email',{required:true}
                )}
            />
            </div>

            <div>
             
              <Input
               label='Password'
                type="password"
              {...register('password',{
                required:true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
              })}
              
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  "
                placeholder="password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-orange-500 hover:text-orange-600">
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>

          <div>
         <Button type="submit" disabled={loading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
  {loading ? (
    <>
      <svg className="animate-spin w-5 h-5 mr-2 text-white" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
      </svg>
      Signing In...
    </>
  ) : (
    "Sign In"
  )}
</Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
         <GoogleBtn/>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <NavLink 
              to="/signup" 
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    );
};

export default LoginForm;