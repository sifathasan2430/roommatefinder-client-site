import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserAuthContext from '../Context/Context';
import Swal from 'sweetalert2';
import { Button, Input } from './Navbar';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {AuthUser, Token } from '../features/auth/authSlice';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import GoogleBtn from './Navbar/GoogleBtn';

const SignUp = () => {
    const {    createNewUser, updateUserProfile } = useContext(UserAuthContext);
    const [loading, setLoading] = useState(false);
   const dispatch=useDispatch()
    const navigate = useNavigate();
    const [error,setError]=useState('')
    const {register,handleSubmit}=useForm()

    const registerUser = async (data) => {
  setError('');
  setLoading(true)
  const { email, password, name, photoURL } = data;

  try {
    const response = await createNewUser(email, password);

    if (response.user) {
      const token = await response.user.getIdToken();

      // Step 1: Update Firebase profile
      try {
        await updateUserProfile(name, photoURL);

        // Step 2: Get latest user info
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
          const userInfo = {
            email: currentUser.email,
            name: currentUser.displayName,
            photoURL: currentUser.photoURL,
            role: 'user', // default role
          };

          // Step 3: Send user to backend
      await axios.post(`https://roommatefinder-server-site.vercel.app/api/user`, userInfo)
          
           

          // Step 4: Dispatch to Redux
          dispatch(AuthUser(userInfo));
          dispatch(Token(token));

          //  Navigate to HomePage
          navigate('/');
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally{
        setLoading(false)
      }
    }
  } catch (error) {
    setError(error.message);
  }
};


    return (
        <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-10">
                    <h2 className="text-2xl font-bold text-[#f89200] mb-6 text-center">Create Account</h2>

                    <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-200">
                       
                       
                    </div>

   {error && (
  <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4 border border-red-200 text-sm">
    {error}
  </div>
)}

                    <form onSubmit={handleSubmit(registerUser)}  className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                
                                <Input
                                    type="text"
                                   label='Full Name'
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                    required
                                    {...register('name',{required:true})}
                                />
                            </div>

                            <div className="sm:col-span-2">
                               
                                <Input
                                    type="email"
                                    label='Email'
                    
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                    {...register('email',{required:true})}
                                />
                            </div>

                            <div>
                                
                                <Input
                                    type="password"
                                   label='Password'
                                
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                    {...register('password',{
                                        required:true,
                                        pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
                                    })}
                                />
                            </div>

                            <div>
                                
                                <Input
                                    type="text"
                                    label='PhotoURL'
                                    {...register('photoURL')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                />
                            </div>
                        </div>

                       

                        <Button
  type="submit"
  disabled={loading}
  className={`w-full mt-4 bg-[#f89200] hover:bg-[#e08300] text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
>
  {loading ? (
    <>
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      Creating...
    </>
  ) : (
    'Sign Up as User'
  )}
</Button>
                    </form>

                    <div className="mt-6">
                    <GoogleBtn/>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <NavLink to="/login" className="text-[#f89200] hover:text-[#e08300] font-medium">
                            Login
                        </NavLink>
                    </p>
                </div>

                {/* Right Column - Image/Info */}
                <div className="hidden lg:flex bg-gradient-to-br from-[#f89200] to-[#ffac33] items-center justify-center p-8 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Welcome to RoomFinder</h3>
                        <p className="mb-6">Find the perfect space for your needs or share your extra space with others.</p>
                        <div className="space-y-4 text-left">
                            <div className="flex items-start">
                                <svg className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Easy booking process</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Secure payments</span>
                            </div>
                            <div className="flex items-start">
                                <svg className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>24/7 customer support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
