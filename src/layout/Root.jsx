import React from 'react';

import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer/Footer';

import Navbar from '../Components/Navbar/Navbar';



const Root = () => {
    const Navigation=useNavigation()

    return (
       <>
      
                  <Navbar></Navbar>
         <div className=''>
           {
            Navigation.state ==="loading"? <Loader></Loader>:<Outlet></Outlet>
          }
         </div>
         <Footer></Footer>
       </> 
    );
};

export default Root;