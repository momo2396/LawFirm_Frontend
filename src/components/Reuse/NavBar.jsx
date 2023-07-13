import React from 'react';
import logo from '../../../public/lawfirm_icon.png' 
const NavBar = () => {
    // console.log(logo);
    return (
        <div className='w-full  fixed top-0 backdrop-blur-lg z-50'>
        <div className='max-w-[1400px] mx-auto pt-5 px-5'>
            <div className='w-full flex justify-between pb-5 border-b border-accent'>
                <div className='flex gap-2 items-center'>
                    <img className='w-14' src={logo}/>
                    <p className='text-3xl font-semibold'>EquiJuris Associates</p>
                </div>
                <div className='btn btn-lg font-extralight btn-accent rounded-none text-white bg-opacity-50'>
                    Book A Consultation
                </div>
            </div>
            <div className='w-full flex justify-between py-5 border-b border-accent'>
                <div className='flex text-xl font-bold gap-5 items-center px-2'>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                </div>
                <div className='flex gap-5'>
                    <div className='flex gap-2'>
                        <img className='w-14' src={logo}/>
                        <div>
                            <p className='text-primary'>Call Us On</p>
                            <p className='text-white font-semibold'>01763-536733</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-14' src={logo}/>
                        <div>
                            <p className='text-primary'>Call Us On</p>
                            <p className='text-white font-semibold'>01763-536733</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NavBar;