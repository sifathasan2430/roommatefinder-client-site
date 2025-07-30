import React from 'react';
import navbarLogo from '../../assets/Logo.png'
const Logo = () => {
    return (
        
             <div className="h-8 w-8 rounded-full bg-[#ff8c00]">
            <img src={navbarLogo} alt="Logo" className="h-full w-full" />
          </div>
        
    );
};

export default Logo;