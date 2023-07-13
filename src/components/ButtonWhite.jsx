import React from 'react';

const ButtonWhite = ({children}) => {
    return (
        <div className='btn bg-white text-base-100 hover:bg-secondary rounded-none font-medium'>
            {children}
        </div>
    );
};

export default ButtonWhite;