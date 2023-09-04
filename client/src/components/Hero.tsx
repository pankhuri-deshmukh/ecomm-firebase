import React from 'react';
import hero from '../assets/hero-alt.jpg'
// style={{ backgroundImage: `url(${hero})` }}

const Hero = () => {
  return (
    <div className="mt-0 py-24 text-white mb-4 bg-cover bg-right" style={{ backgroundImage: `url(${hero})` }}>
      {/* <img src={hero} alt="no img"/> */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl mb-4">
              <span className='italic text-[#eaa5d5]'>Welcome to <br /></span> <span className='font-custom text-[#1D4A34]'>Green Haven</span>
            </h1>
            <p className="text-lg text-[#eaa5d5] mb-4">
              The best greens at amazing prices.
            </p>
            <button className="bg-[#1D4A34] border-2 border-[#1D4A34] text-white font-bold py-2 px-6 rounded-md hover:border-[#1D4A34] hover:bg-white hover:text-[#1D4A34] transition duration-300 ml-12">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
