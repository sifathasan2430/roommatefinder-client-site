import React from 'react';
import Herobanner from '../Components/Herobanner';
import Cards from '../Components/Cards';
import { useLoaderData } from 'react-router';

const Home = () => {
    const members=useLoaderData()
   
    return (
        <div>
              <Herobanner></Herobanner>
              <div className='my-2 sm:my-10'>
                 <div className='text-center space-x-3.5 space-y-4'>
                    <h1 className='text-2xl font-bold'>Find a roommate or room for free.</h1>
            <p className='text-[16px] font-semibold'>Roomies has <br /> no listing or communication fees.</p>
                 </div>
                <div className='sm:my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                 {members.slice(0,6).map(items=>   <Cards items={items} key={items._id}></Cards>)}
                </div>
              </div>
        </div>
    );
};

export default Home;