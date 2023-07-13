import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <div className='btn btn-primary rounded-none text-neutral font-light btn-lg'>
            {children}
        </div>
    );
};

export default ButtonPrimary;