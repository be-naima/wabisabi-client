import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Chef from './Chef';
const Chefs = () => {
   
    const chefs = useLoaderData()
    
    console.log(chefs);
    return (
        <div className='margin container-md px-4 mb-5 '>
            <h1 className='headline text-white mb-5 mt-5 fw-bold display-5 text-center '>Our Chef Team</h1>
            <div className='row row-cols-1 row-cols-md-3 g-5 mt-5'>
                {
                    chefs.map(chef => <Chef
                      key={chef.id}
                      chef = {chef}
                    ></Chef>)
                }
                
            </div>

        </div>
    );
};

export default Chefs;