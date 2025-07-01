import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UserAuthContext from "../Context/Context";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, setLoading, loginWithGoogle } = useContext(UserAuthContext);
  const [userType, setUserType] = useState("user"); // 'user' or 'host'

  const signInHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const FormDataColl = new FormData(form);
    const inputData = Object.fromEntries(FormDataColl.entries());
    const { password, email } = inputData;

    userLogin(email, password)
      .then((userCredential) => {
        setLoading(false);
        const user = userCredential.user;
        Swal.fire({
          title: `Logged in as ${userType === "user" ? "User" : "Host"} successfully`,
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="py-2 flex items-center justify-center bg-gray-100">
      <div className="w-full mx-auto max-w-sm sm:max-w-md bg-white rounded-lg shadow-lg p-4 md:p-6">
        <h2 className="text-xs sm:text-sm md:text-2xl font-bold text-[#222] mb-2 md:mb-4 text-center">Sign In</h2>

        {/* User Type Selection */}
        <div className="flex mb-2 rounded-md overflow-hidden border border-gray-200">
          <button
            type="button"
            onClick={() => setUserType('user')}
            className={`flex-1 py-2 text-xs sm:text-sm md:text-xl font-semibold transition ${
              userType === 'user'
                ? 'bg-[#f89200] text-white'
                : 'bg-gray-100 text-[#333] hover:bg-gray-200'
            }`}
          >
            Book a Room
          </button>
          <button
            type="button"
            onClick={() => setUserType('host')}
            className={`flex-1 py-2 text-xs sm:text-sm md:text-xl font-semibold transition ${
              userType === 'host'
                ? 'bg-[#f89200] text-white'
                : 'bg-gray-100 text-[#333] hover:bg-gray-200'
            }`}
          >
            Host a Room
          </button>
        </div>

        {/* Form */}
        <form onSubmit={signInHandler} className="space-y-4 text-[#333]">
          <div>
            <label className="block font-medium text-xs sm:text-sm md:text-xl mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f89200]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-xs sm:text-sm md:text-xl mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f89200]"
              required
            />
          </div>

          <div className="flex justify-between items-center text-xs text-[#555]">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-[#f89200] hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f89200] text-white py-2 rounded-md font-semibold text-sm hover:bg-[#dd7d03] transition"
          >
            Sign In as {userType === 'user' ? 'User' : 'Host'}
          </button>
        </form>

        <button
          onClick={loginWithGoogle}
          className="w-full mt-4 bg-white border border-gray-300 text-[#222] py-2 rounded-md font-medium text-sm hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M0 0h512v512H0z" fill="#fff" />
              <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z" />
              <path fill="#fbbc05" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73z" />
              <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57z" />
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341z" />
            </g>
          </svg>
          Login with Google
        </button>

        <div className="mt-4 text-center text-sm text-[#555]">
          Don't have an account?
          <NavLink to="/signup" className="text-[#f89200] font-semibold hover:underline ml-1">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
