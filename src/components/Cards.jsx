import React from 'react'
import { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cards = ({car}) => {
    const [likes, setLikes] = useState({});


    // Handle Like Card
    const toggleLike = (carsId) => {
        console.log(carsId)
        setLikes(prevLikes => ({
            ...prevLikes,
            [carsId]: !prevLikes[carsId]
        }))
    }
  return (
    <div>
                <div  className='bg-[#EEEEEE] rounded-md shadow-md hover:scale-105 overflow-hidden'>
                <div className='relative'>
                    <div onClick={() => toggleLike(car.id)} className='absolute right-2 top-2 bg-[#627254]/30 backdrop-blur p-2 rounded-full '>
                        {likes[car.id] ? <FaHeart size={30} className='text-red-500 scale-125' /> : <FaHeart size={30} className='text-white' />}
                    </div>
                    <img src={car.image} alt="Logo Motor" />
                </div>
                <div className='p-3'>
                    <div className='mb-2 flex justify-between items-center'>
                        <h1 className='font-bold'>{car.name}</h1>
                        <span>{car.brand}</span>
                    </div>
                    <div className='mb-2 text-sm text-gray-500'>{car?.description.substring(0, 70)}{car.description.length > 100 ? "..." : ""}</div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-1'>
                            <FaLocationDot size={20} className='text-red-500' />
                            <h2 className='text-md'>{car?.location}</h2>
                        </div>
                            <Link className='bg-[#627254] py-1 px-2 rounded-md text-white capitalize font-medium' to={`/car/${car.id}`}>read more</Link>
                    </div>
                </div>
            </div>
     </div>
  )
}

export default Cards;




