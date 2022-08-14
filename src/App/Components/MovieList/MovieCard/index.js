import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const MovieCard = ( {medium_cover_image, title_long, year, rating} ) => {
    return (
        <div className='md:w-44 w-[40%] sm:w-[30%] mx-4 mb-5 cursor-pointer bg-slate-700 p-2 rounded-xl hover:-translate-y-2 transition-all duration-150'>
            <img src={medium_cover_image} alt='' loading='lazy' />
            <div className='mt-2 '>
                <h1 className='text-gray-100 text-lg font-medium truncate' title={title_long}>{title_long}</h1>
                <div className='flex items-center space-x-2'>
                    <div className='border border-orange-400 text-orange-400 flex items-center w-fit p-1 rounded-md space-x-1 text-xs'>
                        <AiFillStar size={15} />
                        <span>
                           {rating}
                        </span>
                    </div>
                    <span  className='text-xs text-gray-400'>
                        {year}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard