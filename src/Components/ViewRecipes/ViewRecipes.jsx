import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faThumbsUp, faClock } from '@fortawesome/free-solid-svg-icons'
import Recipe from './Recipe';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ViewRecipes = () => {
    const recipies = useLoaderData()
    const navigate = useParams()
    const [chefInfo, setChefInfo] = useState([])

    useEffect(() => {
        fetch(`https://wabisabi-server-be-naima.vercel.app/${navigate.id}`)
            .then(res => res.json())
            .then(data => setChefInfo(data[0]))
    }, [])
    console.log(chefInfo);
    return (
        <div>
            <div className="chefs-banner d-flex flex-md-row flex-column mb-5 ">
                <div className='mx-auto w-75 h- fw-bold d-flex  animation'>


                    <div className='w-75 px-md-5 mt-5 ms-md-5'>
                        <h1 className="text-light display-5 fw-bold mt-5">{chefInfo.name
                        }</h1>
                        <p className="text-white mb-4 mt-4 fs-5 fw-bold ">{chefInfo.discription}</p>
                        <p className="card-text fw-bold text-danger  fs-4"><FontAwesomeIcon icon={faUtensils} /> Recipies: <span className='text-white '>{chefInfo.recipesNumber}</span></p>
                        <p className="card-text fw-bold text-danger fs-4"><FontAwesomeIcon icon={faThumbsUp} /> Likes: <span className='text-white '>{chefInfo.likes}</span></p>
                        <p className="card-text fw-bold text-danger fs-4"><FontAwesomeIcon icon={faClock} /> Experiens: <span className='text-white '>{chefInfo.experience}+ Years</span></p>
                    </div>

                </div>
                <div className='me-md-5  mt-4 px-5 '>
                    <LazyLoadImage className='w-100 rounded-circle mx-auto chef_background mt-5'
                        
                        effect="blur"
                        src={chefInfo.chefImage} />

                </div>



            </div>
            <h1 className='headline text-white mb-5 mt-5 fw-bold display-5 text-center '>Recipes</h1>
            <div className='container-md px-4 mb-5 '>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        recipies.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>


        </div>
    );
};

export default ViewRecipes;