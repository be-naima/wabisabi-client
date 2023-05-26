import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className='margin'>
            <div className='bg-black px-5 py-5 mt-auto position-relative bottom-0'>
                <div className='row row-cols-1 row-cols-md-6 g-5 mb-5 border-bottom border-dark border-2'>
                    <div className='col-lg'>
                    <h1 className='text-white mx-md-auto headline'><FontAwesomeIcon icon={faBowlFood} /> WabiSabi</h1>
                        <p className='text-white-50 mb-3'>We hope you enjoyed browsing our collection of recipes and found some new favorites to add to your repertoire. Happy cooking!</p>
                        <img className='mb-5' src="Group 9969.png" alt="" />
                    </div>
                    <div className='col'>
                        <h2 className='fs-6 fw-bold text-white mb-4'>Company</h2>
                        <p className='text-white-50'>About Us</p>
                        <p className='text-white-50'>Healthy Food</p>
                        <p className='text-white-50'>Latest Recipies</p>
                        
                    </div>
                    <div className='col'>
                        <h2 className='fs-6 fw-bold text-white mb-4'>Product</h2>
                        <p className='text-white-50'>Japanese Foods</p>
                        <p className='text-white-50'>Food Recipe</p>
                        <p className='text-white-50'>Authentic Japanese Cuisine</p>
                        
                    </div>
                    <div className='col'>
                        <h2 className='fs-6 fw-bold text-white mb-4'>Support</h2>
                        <p className='text-white-50'>Help Desk</p>
                        <p className='text-white-50'>Became a Partner</p>
                        <p className='text-white-50'>Developers</p>
                    </div>
                    <div className='col'>
                        <h2 className='fs-6 fw-bold text-white mb-4'>Contact</h2>
                        <p className='text-white-50'>wabisabi_official@yahoo.com</p>
                        <p className='text-white-50'>+1777-978-5570</p>

                    </div>
                </div>
                <div className='mt-5 d-md-flex justify-content-md-between '>
                    <p className='text-white-50'>@2023 Wabisabi. All Rights Reserved</p>
                    <p className='text-white-50'>Powered by WabiSabi</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;