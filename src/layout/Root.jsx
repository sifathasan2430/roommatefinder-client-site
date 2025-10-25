import React from 'react';

import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../components/Loader';
import Footer from '../components/Footer/Footer';

import Navbar from '../components/Navbar/Navbar';



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