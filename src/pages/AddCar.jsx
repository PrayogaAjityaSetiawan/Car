import { useState } from "react";
import { toast } from 'react-toastify';

const AddCar = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('Honda');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');


    const handleImageChange = (e) => {
        setImage(e.target.value);
    };
    const submitForm = async (e) => {
        e.preventDefault();
        const newCar = {
            title,
            image,
            brand,
            description,
            location
        };

        try {
            const response = await fetch('http://localhost:5000/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCar),
            });

            if (!response.ok) {
                throw new Error('Failed to add car');
            }

            // Mereset form ketika berhasil Submit
            setTitle('');
            setImage('');
            setBrand('Honda');
            setDescription('');
            setLocation('');

            // Show success toast
            toast.success('Berhasil Menambahkan Mobil');
        } catch (error) {
            console.error('Error adding car:', error);
            // Show error toast
            toast.error('Failed to add car');
        }
    };

    return (
        <section>
            <div className="w-full py-20">
                <div className="max-w-2xl mx-auto bg-[#EEEEEE] py-9 rounded-md shadow-md">
                    <form onSubmit={submitForm}>
                        <h1 className="text-center text-2xl font-bold">Tambah Car</h1>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="title">Mobil</label>
                            <input
                                required
                                id="title"
                                name="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Masukkan tipe Mobil"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="image">Gambar</label>
                            <input
                                required
                                id="image"
                                name="image"
                                type="text"
                                value={image}
                                onChange={handleImageChange}
                                placeholder="Masukkan URL Gambar"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="brand">Merek</label>
                            <select
                                id="brand"
                                name="brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="border rounded-md py-2 px-3"
                            >
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Suzuki">Suzuki</option>
                            </select>
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="description">Deskripsi</label>
                            <textarea
                                required
                                id="description"
                                name="description"
                                rows='4'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Masukkan Deskripsi Mobil"
                                className="border rounded-md py-2 px-3"
                            ></textarea>
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="location">Lokasi</label>
                            <input
                                required
                                id="location"
                                name="location"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Masukkan lokasi mobil"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="px-4">
                            <button type="submit" className="block w-full rounded-full  bg-[#DDDDDD] text-[#627254] text-center px-3 py-2  ">
                                Tambah Mobil
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddCar;
