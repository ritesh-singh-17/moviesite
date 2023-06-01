import React from 'react'
import Card from './Card'
import { useAppContext } from './context';

const Movies = () => {
  const { products } = useAppContext();
  return (
    <>
      <div className='container'>
        <div className='moviesSection row m-0'>
          {products.map((currElem, id) => {
            return <Card
              key={id}
              id1={id}
              score={currElem.score}
              show={currElem.show}
            />
          })}
        </div>
      </div>
    </>
  )
}

export default Movies
