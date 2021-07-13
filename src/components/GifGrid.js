import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItrem } from './GifGridItrem';

export const GifGrid = ( {  category} ) => {

    const {data:images, loading} = useFetchGifs( category );
    console.log(loading)
    // console.log(data)

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'> { category }</h3>

        { loading && <p className='animate__animated animate__flash'>Loading...</p> }

        <div className='card-grid'>
            {
                images.map( img => (
                    <GifGridItrem   
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        </div>
        </>
    )
}



