import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import UserAuthContext from "../Context/Context";

import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [isClick,setIsClick]=useState(false)
  const [dropDownbtnClick,setDropdownBtnClick]=useState(false)
  const { user, userLogOut } = useContext(UserAuthContext);

  const tolTipButton=()=>{
    setIsClick(prev=>!prev)
  }
  const dropDownToltip=()=>{
    setDropdownBtnClick(prev=>!prev)

  }
  const navLinks = (
    <>
     <li> <NavLink
        href="#features"
        className=" font-semibold text-stone-300 hover:text-white hover:underline"
      >
        Home
      </NavLink> </li>

      {user && (
       <li> <NavLink
          to={"/addtofindroommate"}
          className="text-stone-300 font-semibold  hover:text-white hover:underline"
        >
          AddtoFindRoommate
        </NavLink></li>
      )}
     <li> <NavLink
        to={"/browserlisting"}
        className="font-semibold  text-stone-300 hover:text-white hover:underline"
      >
        BrowseListing
      </NavLink> </li>
      {user && (
      <li>  <NavLink
          to="/mylisting"
          className="text-stone-300 font-semibold  hover:text-white hover:underline"
        >
          My Listings
        </NavLink></li>
      )}
    </>
  );

  const NavAuthLinks = (
    <>
    <li>  <NavLink
        to={"/login"}
        className="hidden md:inline-block text-slate-300 hover:text-white transition"
      >
        Login
      </NavLink>  </li>
    <li> <NavLink
        to={"/signup"}
        className="hidden md:inline-block text-slate-300 hover:text-white transition"
      >
        Signup
      </NavLink>  </li> 
    </>
  );

  return (
    <>
    <div>
      {/* <nav className="w-full  py-6 px-4 md:px-12">
        <div className="flex justify-between items-center ">
          <div className="flex items-center space-x-2">
         

            <div className="w-8 h-8   rounded-full gradient-bg flex items-center justify-center">
                <button><MdMenu size={30} color="white" /></button>
              <h1 className="text-2xl   font-extrabold text-white "><span className=" bg-[linear-gradient(to_right,#8389f2,#e449a4)] bg-clip-text text-transparent">Roommate</span>Finder</h1>
            </div>
            <div
              className={`${isClick ? 'block':''} sm:hidden absolute left-0 top-18 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden `}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <NavLink
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
              >
                Home
              </NavLink>
              <NavLink
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
              >
                Add to Find Roommate
              </NavLink>
              <NavLink
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
              >
                Browse Listing
              </NavLink>
              <NavLink
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
              >
                Browse Listing
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks}
          </div>

          {user ? (
            <div className="relative ml-3">
              <div>
                
              </div>

              <Tooltip id="my-tooltip">
              
              </Tooltip>
            </div>
          ) : (
            <div className="flex items-center space-x-4">{NavButtons}</div>
          )}
        </div>
      </nav> */}
    </div>
    <div className="navbar relative  bg-[#151617] shadow-sm">
  <div className="navbar-start items-center">
   <div>
    <div className="">
      <IoMdMenu onClick={dropDownToltip} size={30} color="white" />
    </div>

   </div>
    <h1 className="text-2xl ml-2  font-extrabold text-white "><span className=" bg-[linear-gradient(to_right,#8389f2,#e449a4)] bg-clip-text text-transparent">Roommate</span>Finder</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {
        navLinks
      }
      {
        user ? "": NavAuthLinks
      }
    </ul>
  </div>
  <div className="navbar-end ">
   <button  onClick={tolTipButton}
                  type="button"
                  className="relative  flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>

                  <img
                  
                    className="size-8 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </button>
                 
               
  </div>
  <div onMouseLeave={()=>setIsClick(false)}
                  className={ `${isClick ? '':"hidden"} absolute right-0 top-15 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <NavLink
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    {user?.displayName}
                  </NavLink>

                  <button onClick={userLogOut}>
                  
                    <NavLink
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </NavLink>
                  </button>
                </div>
                 <div onMouseLeave={()=>setDropdownBtnClick(false)}
                  className={ `${dropDownbtnClick ? '':"hidden"} absolute left-0 top-15 z-10 mt-2 w-48 origin-top-right rounded-md  py-1 bg-[#1d1a3a] ring-1 ring-black/5 focus:outline-hidden`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <ul  className="menu menu-horizontal text-sm text-gray-700 px-1">
                 {
                  navLinks
                 }
                 {
                  user ? '':NavAuthLinks
                 }
</ul>
                  <button onClick={userLogOut}>
                  
                    <NavLink
                      className="block px-4 py-2 text-white"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </NavLink>
                  </button>
                </div>
    
</div>
</>
  );
};

export default Navbar;
