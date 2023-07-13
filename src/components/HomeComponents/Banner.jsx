import React from 'react';
import bannerImage from '../../assets/banner/scale03.jpg'
import ButtonPrimary from '../Reuse/ButtonPrimary';
const Banner = () => {
    console.log(bannerImage);
    return (
        <div className={`h-screen overflow-hidden bg-cover bg-no-repeat`} style={{backgroundImage: `url('${bannerImage}')`, backgroundPositionX: "center"}}>
            {/* <img className='w-full absolute top-0 left-0 opacity-50' src={bannerImage}/> */}
            <div className='w-full h-full backdrop-blur-sm pt-60 bg-black bg-opacity-40 px-5'>
                <p className='text-5xl font-semibold text-center mt-20'>Deeper Understanding <br/> Better Solutions</p>
                <p className='my-5 text-primary text-center text-xl max-w-2xl mx-auto'>It is a long established fact that a reader will be distracted by 
the readable content of a looking at its layout.</p>
<div className='w-fit mx-auto'>
<ButtonPrimary>Get in touch</ButtonPrimary>
</div>
            </div>
        </div>
    );
};

export default Banner;