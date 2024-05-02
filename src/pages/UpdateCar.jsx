import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const UpdateCarPage = () => {
    const { id } = useParams(); // Assuming you're using React Router to get the car ID from the URL
    const [car, setCar] = useState({
        title: '',
        image: '',
        brand: 'Honda',
        description: '',
        location: ''
    });
    const history = useNavigate()

    useEffect(() => {
        // Fetch the existing car details using the car ID from the API
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:5000/cars/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch car');
                }
                const carData = await response.json();
                setCar(carData);
            } catch (error) {
                console.error('Error fetching car:', error);
                toast.error('Failed to fetch car');
            }
        };

        fetchCar();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCar({
            ...car,
            [name]: value
        });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:5000/cars/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(car),
            });

            if (!response.ok) {
                throw new Error('Failed to update car');
            }
            history('/car')
            toast.success('Mobil Berhasil DiPerbarui');
        } catch (error) {
            console.error('Error updating car:', error);
            toast.error('Failed to update car');
        }
    };

    return (
        <section>
            <div className="w-full py-20">
                <div className="max-w-2xl mx-auto bg-[#EEEEEE] py-9 rounded-md shadow-md">
                    <form onSubmit={submitForm}>
                        <h1 className="text-center text-2xl font-bold">Update Car</h1>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="title">Car Title</label>
                            <input
                                required
                                id="title"
                                name="title"
                                type="text"
                                value={car.title}
                                onChange={handleInputChange}
                                placeholder="Enter car title"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="image">Car Image URL</label>
                            <input
                                required
                                id="image"
                                name="image"
                                type="text"
                                value={car.image}
                                onChange={handleInputChange}
                                placeholder="Enter car image URL"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="brand">Car Brand</label>
                            <select
                                id="brand"
                                name="brand"
                                value={car.brand}
                                onChange={handleInputChange}
                                className="border rounded-md py-2 px-3"
                            >
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Suzuki">Suzuki</option>
                            </select>
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="description">Car Description</label>
                            <textarea
                                required
                                id="description"
                                name="description"
                                rows='4'
                                value={car.description}
                                onChange={handleInputChange}
                                placeholder="Enter car description"
                                className="border rounded-md py-2 px-3"
                            ></textarea>
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="location">Car Location</label>
                            <input
                                required
                                id="location"
                                name="location"
                                type="text"
                                value={car.location}
                                onChange={handleInputChange}
                                placeholder="Enter car location"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="px-4">
                            <button type="submit" className="block w-full rounded-full bg-[#DDDDDD] text-[#627254] text-center px-3 py-2">
                                Update Car
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateCarPage;




