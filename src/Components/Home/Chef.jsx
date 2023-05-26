import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faThumbsUp,faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
const Chef = ({chef}) => {
    const {name,chefImage,likes,recipesNumber,experience,id} = chef
    return (
        <div className="col">
            <div className="card ">
                <div className='img_background card'>
                <img src={chefImage}className="card-img-top w-75 mx-auto " alt="..." />
                </div>
                <div className="card-body">
                    <p className='btn btn-danger position-absolute top-0 end-0 mt-3'>Experience {experience}years+</p>
                    <h5 className="card-title fw-bold fs-4">{name}</h5>
                    <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faUtensils} /> Recipies: <span className='text-danger'>{recipesNumber}</span></p>
                    <p className="card-text fw-bold text-black"><FontAwesomeIcon icon={faThumbsUp} /> Likes: <span className='text-danger'>{likes}</span></p>
                    <Link to={`/${id}`}><button className=" btn btn-danger  fw-bold" type="submit">View Recipes <FontAwesomeIcon icon={faBowlFood} /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;