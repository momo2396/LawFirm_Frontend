import React from 'react';
import image1 from '../../assets/banner/hammer01.jpg'
import image2 from '../../assets/banner/hammer02.jpg'
import logo from '../../../public/lawfirm_icon.png'

const SecondSection = () => {
    return (
        <div className=' w-full flex py-20'>
            <div className='flex gap-10 w-fit mx-auto'>
                <div className='max-w-sm flex flex-col gap-10'>
                    <img className='w-full' src={image1}/>
                    <img className='w-full' src={image2}/>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='text-4xl text-primary'>The Simple Choice<br/>for Complex Litigation</p>
                    <p className='text-justify text-xl max-w-2xl'>There are many variations of passages of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour, oir randomised workds which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
                    <div className='flex items-center gap-5'>
                        <img className='w-16' src={logo}/>
                        <p className='text-3xl font-thin italic names'>Foyazunnesa Momo</p>
                    </div>
                    <div className='flex gap-10'>
                        <div className='bg-accent p-5 px-10 text-2xl font-semibold flex items-center gap-5'> 
                            <img className='w-16' src={logo}/>
                            <div className='flex flex-col justify-between'>
                            <p>95%</p>
                            <p>Case Success</p>
                            </div>
                        </div>
                        <div className='bg-primary p-5 px-10 text-2xl text-base-100 font-semibold flex items-center gap-5 '> 
                            <img className='w-16' src={logo}/>
                            <div className='flex flex-col justify-between'>
                            <p>Years</p>
                            <p>Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;