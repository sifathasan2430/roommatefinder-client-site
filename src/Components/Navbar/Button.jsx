import React from 'react';

const Button = ({children,
    type='button',
    bgColor='bg-[#ff9a68]',
    textColor='text-white',
    className='',
    ...props

}) => {

    return (
        <button type={type}  {...props}  className={`py-2 px-4 ${className}  ${bgColor} ${textColor}`} >{children}</button>
    );
};

export default Button;