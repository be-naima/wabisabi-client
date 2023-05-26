import React from 'react';
import '../../../public/style.css'
const Banner = () => {
    return (
        <div className="banner d-flex flex-column  text-left mb-5 ps-md-5 ps-2 pt-5 ">
                <div className='d-flex flex-column w-md-50 w-100 px-3 px-md-5 fw-bold animation'>
                <p className='text-white fw-bold mt-5'>MORE FLAVOR FOR LESS</p>
                <h1 className="text-white display-5 fw-bold">Take the leap into a world <br /> of flavors with Japan's <br /> amazing cuisine! </h1>
                <p className="text-light mb-5 mt-4 fs-5 fw-bold">Welcome to WabiSabi! We are a Japanese recipe provider that takes pride in <br />  giving  delicious,high quality dishes  made with the freshest ingredients.</p>
                </div>
                <div className="input-group px-md-5 px-3 animation">
                  
                  <button className="text-white px-5 py-3 banner-button fw-bold fs-5" type="button" >Get Started</button>
                </div>
                
          </div>
    );
};

export default Banner;