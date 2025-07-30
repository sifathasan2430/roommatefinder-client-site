import React, { Children } from 'react';

const Container = ({children}) => {
    return (
        <div className='container flex h-16 items-center justify-between px-4 mx-auto'>
            {children}
        </div>
    );
};

export default Container;