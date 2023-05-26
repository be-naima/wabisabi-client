import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
    const { id, name, ingridients, method, rating, foodImg } = recipe
    const [fav, setFav] = useState(false)
    const btnFavourite = () => {
        setFav(true)
        toast("Added to favourite!")
    }
    return (

        <div className="col ">
            <div className="card h-100">
                <div>
                    <img src={foodImg} className="img-fluid rounded-2" alt="..." />
                </div>
                <div className="card-body px-4">
                    <h5 className="card-title headline fw-bold fs-4 mb-3">{name}</h5>
                    <h6 className='fw-bold'>Ingredients</h6>
                    <p className="card-text">{ingridients}</p>
                    <h6 className='fw-bold'>Cooking Method</h6>
                    <p className="card-text">{method}</p>
                    
                </div>
                <div class="card-footer">
                <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center '>
                            <div>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={Math.round(parseInt(rating))}
                                    readOnly
                                />
                            </div>

                            <div className='d-flex ms-2 text-secondary '>
                                <p className=' mb-0 '>{rating}</p>
                            </div>
                        </div>

                        <div>
                            <button onClick={btnFavourite} disabled={fav} className="border-0  fs-4 bg-white "><FontAwesomeIcon icon={faHeart} /></button>
                            <ToastContainer /></div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Recipe;