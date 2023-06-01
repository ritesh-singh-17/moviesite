import React from 'react'
import { useAppContext } from './context';
import FormData from './FormData';

const Form = () => {
    let link = window.location.href;
    let id3 = link.slice(link.length - 1, link.length);
    let id4 = parseInt(id3);
    const { products } = useAppContext();

    return (
        <>
            <div>
                {products.map((currElem, id) => {
                    if (id4 === id) {
                        return <FormData key={id} show={currElem.show} />
                    } else {
                        return null
                    }
                })}
            </div>
        </>
    )
}

export default Form
