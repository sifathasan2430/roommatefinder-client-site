import React from 'react';
import { NavLink } from 'react-router';
const Navbar = () => {
    const navLinks=<>
     <NavLink href="#features" className="text-stone-300 hover:text-white hover:underline">Home</NavLink>
        <NavLink href="#solutions" className="text-stone-300 hover:text-white hover:underline">Add to Find Roommate</NavLink>
        <NavLink href="#pricing" className="text-stone-300 hover:text-white hover:underline">Browse Listing</NavLink>
        <NavLink href="#testimonials" className="text-stone-300 hover:text-white hover:underline">My Listings</NavLink>
    </>

    const NavButtons=<>
     <NavLink href="#" className="hidden md:inline-block text-slate-300 hover:text-white transition">Login</NavLink>
     <NavLink href="#" className="hidden md:inline-block text-slate-300 hover:text-white transition">Signup</NavLink>
    </>

    return (
        <div>
              <nav className="fixed top-0 left-0 w-full z-50 py-6 px-4 md:px-12 backdrop-blur-md bg-slate-900/50">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">

        <div className='dropdown'>
             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
        </div>
        
        <div className="w-8 h-8   rounded-full gradient-bg flex items-center justify-center">

          
            <span className="text-xl  font-bold title-font">RoomFinder</span>
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
      <div className="flex items-center space-x-4">
       
       {
        NavButtons
       }
      </div>
   <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

          
          <div className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
           
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</NavLink>
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</NavLink>
            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</NavLink>
          </div>
        </div>
     
    </div>
  </nav>
        </div>
    );
};

export default Navbar;