import React, { useEffect, useState } from 'react'
import Cards from './Cards'


 const Card = () => {
    const [cars, setCars] = useState([])
    const URL = 'http://localhost:5000/cars'

    useEffect(() => {
        const fetchCar = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setCars(data)
            console.log(data)
        }
        fetchCar()
    },[])
return (
    <section>
        <div className=' px-3 grid md:grid-cols-4 gap-5'>
            { cars.map((car) => (
               <Cards key={car.id} car={car} />
            ))}        
        </div>
    </section>
  )
}

export default Card;









