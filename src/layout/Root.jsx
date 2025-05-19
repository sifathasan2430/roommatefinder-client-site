import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
    const Navigation=useNavigation()

    return (
        <div>
                    <Navbar></Navbar>
          {
            Navigation.state ==="loading"? "":<Outlet></Outlet>
          }
        </div>
    );
};

export default Root;