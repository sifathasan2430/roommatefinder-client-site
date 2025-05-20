import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Components/Loader';

const Root = () => {
    const Navigation=useNavigation()

    return (
        <div>
                    <Navbar></Navbar>
         <div className=''>
           {
            Navigation.state ==="loading"? <Loader></Loader>:<Outlet></Outlet>
          }
         </div>
        </div>
    );
};

export default Root;