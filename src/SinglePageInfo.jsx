import React from 'react'
import Star from './Star';
import { NavLink } from 'react-router-dom';

const SinglePageInfo = ({ show, id3 }) => {
    const { genres, image, language, name, rating, runtime, schedule, url, summary } = show;
    let result = summary.replace(/(<([^>]+)>)/ig, '');
    return (
        <>
            <div className="movieInfoSection container">
                <div className="movie-img-and-data row m-0">
                    {/* producctImage */}
                    <div className="movie-image mb-2 col-lg-5 col-md-5 col-sm-12 col-12">
                        <img className='img-fluid' src={image.original} alt={image.name} />
                    </div>

                    {/* product data */}
                    <div className="movie-data mt-2 col-lg-7 col-md-7 col-sm-12 col-12">
                        <h2>{name}</h2>
                        <Star stars={rating.average} />
                        <p>{result}</p>
                        <p ><span className="spanheading">Language: </span> {language}</p>
                        <p ><span className="spanheading">Runtime: </span> {runtime} minutes</p>
                        <p className='d-flex m-0'>
                            <span className="spanheading">Generes: </span>
                            {genres.map((currElem) => {
                                return <p > {currElem}, </p>
                            })}
                        </p>
                        <p><span className="spanheading">Schedule: </span>Every {schedule.days[0]} at {schedule.time}</p>
                        <a className='movieLink' href={url}>
                            <button className='btn btn-outline-primary'>Link to movie site</button>
                        </a>
                        <NavLink to={`/moviesite/ticketform/${id3}`}>
                            <button className='btn btn-primary mt-3'> Book Your Tickets Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePageInfo
