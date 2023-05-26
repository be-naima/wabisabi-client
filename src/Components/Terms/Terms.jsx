import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container py-5'>
            <h1>Terms & Conditions</h1>
            <p>The Terms and Conditions for a this website govern the use of the website and state that it is for personal, non-commercial use. By accessing or using the website, users agree to these Terms.</p>
             <ul>
                <li>
                    <h4>Use of Site</h4>
                    <p>The website is intended for personal, non-commercial use. Users may view and print recipes for their own use, but may not sell or distribute any content from the website without permission.</p>
                </li>
                <li>
                    <h4>Content Ownership</h4>
                    <p>All content on the website, including recipes, images, and other materials, are owned by the website owner and are protected by copyright and other intellectual property laws. Users may not copy, distribute, or otherwise use any content from the website without permission.</p>
                </li>
                <li>
                    <h4>User Content</h4>
                    <p>Users may submit their own recipes and other content to the website. By submitting content, users grant the website owner a non-exclusive, royalty-free, perpetual, and irrevocable license to use, display, and distribute the content in any form or media. Users are responsible for ensuring that their content does not infringe on the rights of others and does not contain any unlawful, defamatory, or harmful material.</p>
                </li>
                <li>
                    <h4>Disclaimer of Warranties</h4>
                    <p>The website owner does not guarantee the accuracy or completeness of any content on the website, including recipes and nutritional information. The website is provided on an “as is” and “as available” basis, without any warranties of any kind, either express or implied. The website owner disclaims all warranties, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.
</p>
                </li>
                <li>
                    <h4>Limitation of Liability</h4>
                    <p>The website owner will not be liable for any damages of any kind arising from the use of the website, including but not limited to, direct, indirect, incidental, punitive, and consequential damages. Users agree to indemnify and hold the website owner harmless from any claims, damages, or expenses arising from their use of the website or their violation of these Terms.</p>
                </li>
                
             </ul>
            <div className='mx-auto text-center'><Link to='/register'><button className='btn btn-danger  '> Go Back</button></Link></div>
        </div>
    );
};

export default Terms;