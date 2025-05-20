import React, { useContext } from 'react';
import UserAuthContext from '../Context/Context';
import { Navigate } from 'react-router';
import Loader from './Loader';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(UserAuthContext)
    if (loading) return <Loader></Loader>
    if (!user){
     return   <Navigate to={'/login'}/>
    }
     else{
        return children
     }

    
};

export default Privateroute;