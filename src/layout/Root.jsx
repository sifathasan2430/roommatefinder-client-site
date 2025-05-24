import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';

const Root = () => {
    const Navigation=useNavigation()

    return (
        <div className='max-w-[1500px]  mx-auto'>
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