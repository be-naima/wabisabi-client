import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faFireAlt,faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Rating } from '@smastrom/react-rating'
const LatestRecipies = () => {
    return (
        <div className='margin container-md px-4 mb-5 animation'>
            <h1 className='headline text-white mb-5 mt-5 fw-bold display-5 text-center '>Our Latest Recipies</h1>
            <div className='row row-cols-1 row-cols-md-3 g-5 mt-5'>
                <div className="col">
                    <div className="card ">
                        <div className=''>
                            <img src="https://cdn.media.amplience.net/i/japancentre/Blog-156-tempura/Blog-156-tempura?$poi$&w=556&h=391&sm=c&fmt=auto" className="card-img-top mx-auto img-fluid" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className='btn btn-danger position-absolute top-0 end-0 mt-3'>Latest <FontAwesomeIcon icon={faFireAlt} /></p>
                            <h5 className="card-title fw-bold fs-4">Tempora</h5>
                            <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faUserAlt} /> Chef: <span className='text-danger'>Hiroshi Kaito</span></p>
                            <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faThumbsUp} /> Likes: <span className='text-danger'>20k</span></p>
                            <div className='d-flex align-items-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={5}
                                    readOnly
                                />
                            </div>

                            <div className='d-flex ms-2 text-secondary'>
                                <p className=' mb-0 '>5.0</p>
                            </div>
                        </div>            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <div className=''>
                            <img src="https://cdn.media.amplience.net/i/japancentre/Blog-page-156-tonkatsu-pork-cutlets/Blog-page-156-tonkatsu-pork-cutlets?$poi$&w=556&h=391&sm=c&fmt=auto" className="card-img-top mx-auto img-fluid" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className='btn btn-danger position-absolute top-0 end-0 mt-3'>Latest <FontAwesomeIcon icon={faFireAlt} /></p>
                            <h5 className="card-title fw-bold fs-4">Tonkatsu</h5>
                            <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faUserAlt} /> Chef: <span className='text-danger'>Akira Haru</span></p>
                            <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faThumbsUp} /> Likes: <span className='text-danger'>22k</span></p>
                            <div className='d-flex align-items-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={4.8}
                                    readOnly
                                />
                            </div>

                            <div className='d-flex ms-2 text-secondary'>
                                <p className=' mb-0 '>5.0</p>
                            </div>
                        </div>            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <div className=''>
                            <img src="https://cdn.media.amplience.net/i/japancentre/Blog-page-156-Yakitori-Grilled-Skewers/Blog-page-156-Yakitori-Grilled-Skewers?$poi$&w=556&h=391&sm=c&fmt=auto" className="card-img-top mx-auto img-fluid" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className='btn btn-danger position-absolute top-0 end-0 mt-3'>Latest <FontAwesomeIcon icon={faFireAlt} /></p>
                            <h5 className="card-title fw-bold fs-4">Yakitori</h5>
                            <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faUserAlt} /> Chef: <span className='text-danger'>Sakura Kei</span></p>
                            <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faThumbsUp} /> Likes: <span className='text-danger'>19k</span></p>
                            <div className='d-flex align-items-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={4.6}
                                    readOnly
                                />
                            </div>

                            <div className='d-flex ms-2 text-secondary'>
                                <p className=' mb-0 '>5.0</p>
                            </div>
                        </div>            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LatestRecipies;