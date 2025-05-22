import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import UserAuthContext from '../Context/Context';
const Navbar = () => {
  const {user,userLogOut}=useContext(UserAuthContext)
    const navLinks=<>
     <NavLink href="#features" className=" font-semibold text-stone-300 hover:text-white hover:underline">Home</NavLink>
     {  user && <NavLink to={'/addtofindroommate'} className="text-stone-300 font-semibold  hover:text-white hover:underline">AddtoFindRoommate</NavLink>}
        <NavLink to={'/browserlisting'} className="font-semibold  text-stone-300 hover:text-white hover:underline">BrowseListing</NavLink>
     {user &&   <NavLink to='/mylisting' className="text-stone-300 font-semibold  hover:text-white hover:underline">My Listings</NavLink>}
    </>

    const NavButtons=<>
     <NavLink to={"/login"} className="hidden md:inline-block text-slate-300 hover:text-white transition">Login</NavLink>
     <NavLink to={"/signup"} className="hidden md:inline-block text-slate-300 hover:text-white transition">Signup</NavLink>
    </>

    return (
        <div>
              <nav className="w-full  py-6 px-4 md:px-12 bg-[#151617]">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">

        <div className='dropdown hidden'>
             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
        </div>
        
        <div className="w-8 h-8   rounded-full gradient-bg flex items-center justify-center">

          
            <span className="text-xl  font-bold text-white ">RoomFinder</span>
        </div>
             <div className="sm:hidden absolute left-0 top-18 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
           
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Home</NavLink>
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Add to Find Roommate</NavLink>
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Browse Listing</NavLink>
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Browse Listing</NavLink>
          </div>

      
      </div>
      <div className="hidden md:flex space-x-8 items-center">
                {
                    navLinks
                }     
      </div>
      
 { user ? <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src={user.
photoURL} alt=""/>
            </button>
          </div>

          
          <div className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
           
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">{user.displayName}</NavLink>
            
          
            
         <button onClick={userLogOut}>   <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</NavLink> </button>

          </div>
        </div> : 
        <div className="flex items-center space-x-4">
       
       {
        NavButtons
       }
      </div>
        }
     
    </div>  
  </nav>
        </div>
    );
};

export default Navbar;