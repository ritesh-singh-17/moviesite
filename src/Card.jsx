import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'

const Card = ({ score, show, key, id1 }) => {
    const { genres, image, language, name, rating, runtime, schedule, url, } = show;
    return (
        <>
            <div className="cardSection col-lg-4 col-md-6 col-sm-6">
                <div className="card ">
                    <img class="card-img-top" src={image.medium} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">{name}</h3>
                        <div >
                            <p className='m-0'><span className='spanheading'>Ratings: </span> {rating.average} </p>
                            <p className='m-0'><span className="spanheading">Language: </span> {language}</p>
                            <p className='m-0'><span className="spanheading">Runtime: </span> {runtime} minutes</p>
                            <p className='d-flex'>
                                <span className="spanheading">Generes: </span>
                                {genres.map((currElem) => {
                                    return <p className='m-0'>{currElem}, </p>
                                })}
                            </p>
                        </div>
                        <NavLink to={`/moviesite/singlepage/${id1}`} >
                            <button className='btn btn-primary '>More Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
