import React from 'react';

import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer/Footer';

import Navbar from '../Components/Navbar/Navbar';


const Root = () => {
    const Navigation=useNavigation()

    return (
        <div className=''>
                  <Navbar></Navbar>
         <div className=''>
           {
            Navigation.state ==="loading"? <Loader></Loader>:<Outlet></Outlet>
          }
         </div>
         <Footer></Footer>
        </div>
    );
};

export default Root;