import React from 'react'
import { useAppContext } from './context';
import SinglePageInfo from './SinglePageInfo';

const SinglePage = () => {
  let link=window.location.href;
  let id1=link.slice(link.length-1, link.length);
  let id2=parseInt(id1);
  const {products} =useAppContext();
  // const {show}=products[id];
  // const { genres, image, language, name, rating, runtime, schedule, url, } = show;

  return (
    <>
      <div>
        {products.map((currElem, id)=>{
          if(id2===id){
            return <SinglePageInfo key={id} id3={id} show={currElem.show}/>
          }else{
            return null
          }
        })}
      </div>
    </>
  )
}

export default SinglePage
