import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserAuthContext from '../Context/Context';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { setLoading, setUser, loginWithGoogle, createNewUser, updateUserProfile } = useContext(UserAuthContext);
    const [userType, setUserType] = useState('user');

    const userDataHandler = (e) => {
        e.preventDefault();
       
        const form = e.target;
        const FormDataCollect = new FormData(form);
        const inputData = Object.fromEntries(FormDataCollect.entries());
        const userEmail = FormDataCollect.get('email');
        const userPassword = FormDataCollect.get('password');
        const { displayName, photoUrl } = inputData;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const isValid = passwordRegex.test(userPassword);
        
        if (!isValid) {
            return Swal.fire({
                icon: "error",
                title: "Password Requirements",
                text: "Password must contain: \n- At least one uppercase letter \n- At least one lowercase letter \n- Minimum 6 characters",
            });
        }

        setLoading(true);
        
        createNewUser(userEmail, userPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateUserProfile(displayName, photoUrl)
                    .then(() => {
                        return setUser({
                            ...user,
                            photoUrl,
                            userType
                        });
                    });
            })
            .then(() => {
                Swal.fire({
                    title: `Account created as ${userType === 'user' ? 'User' : 'Host'}`,
                    icon: "success"
                });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: error.message,
                });
            });                  
    }

    return (
        <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Form */}
                <div className="p-6 sm:p-8 lg:p-10">
                    <h2 className="text-2xl font-bold text-[#f89200] mb-6 text-center">Create Account</h2>
                    
                    <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-200">
                        <button
                            type="button"
                            onClick={() => setUserType('user')}
                            className={`flex-1 py-2 px-4 text-sm sm:text-base font-medium transition-colors ${userType === 'user' ? 'bg-[#f89200] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Book Rooms
                        </button>
                        <button
                            type="button"
                            onClick={() => setUserType('host')}
                            className={`flex-1 py-2 px-4 text-sm sm:text-base font-medium transition-colors ${userType === 'host' ? 'bg-[#f89200] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Host Rooms
                        </button>
                    </div>

                    <form onSubmit={userDataHandler} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    name='displayName' 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                    required
                                />
                            </div>
                            
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name='email' 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input 
                                    type="password" 
                                    name='password' 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                                <input 
                                    type="text" 
                                    name='photoUrl' 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f89200] focus:border-[#f89200]"
                                />
                            </div>
                        </div>

                        <input type="hidden" name="userType" value={userType} />

                        <button 
                            type="submit"
                            className="w-full mt-4 bg-[#f89200] hover:bg-[#e08300] text-white font-medium py-2 px-4 rounded-md transition-colors"
                        >
                            Sign Up as {userType === 'user' ? 'User' : 'Host'}
                        </button>
                    </form>

                    <div className="mt-6">
                        <button 
                            onClick={() => loginWithGoogle()} 
                            className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2"
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
                            Sign up with Google
                        </button>
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