import React from 'react';

const ButtonOutline = ({children}) => {
    return (
        <div className='btn bg-base-100 text-white border border-primary hover:bg-primary hover:text-neutral rounded-none font-medium'>
            {children}
        </div>
    );
};

export default ButtonOutline;