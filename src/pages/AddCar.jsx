import { useState } from "react";
import { toast} from 'react-toastify';

const AddCar = () => {
    const [title, setTitle] = useState('');
    const [gambar, setGambar] = useState('');
    const [brand, setBrand] = useState('Honda');
    const [description, setDescription] = useState('');
    const [lokasi, setLokasi] = useState('')
    const submitForm = (e) => {
            e.preventDefault();

            const newCar = {
                title,
                gambar,
                brand,
                description,
                lokasi
            }

            console.log(newCar)
            toast.success('Job Added Successfully');

    }
    return (
        <section>
            <div className="w-full py-20">
                <div className="max-w-2xl mx-auto bg-[#EEEEEE] py-9 rounded-md shadow-md">
                    <form onSubmit={submitForm} >
                        <h1 className="text-center text-2xl font-bold">Tambah Car</h1>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="title">Mobil</label>
                            <input 
                                id="title" 
                                name="title"
                                type="file" 
                                value={title}
                                onChange={(e) => setTitle (e.target.value)}
                                placeholder="Masukkan tipe Mobil"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="merek">Merek</label>
                            <input 
                                id="merek" 
                                name="merek"
                                type="text" 
                                value={gambar}
                                onChange={(e) => setGambar(e.target.value)}
                                placeholder="Masukkan Merek Mobil"
                                className="border rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="brand">Brand</label>
                            <select 
                                id="brand" 
                                name="brand"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="border rounded-md py-2 px-3"
                            >
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Suzuku">Suzuki</option>
                            </select>

                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="description">Merek</label>
                            <textarea 
                                id="description" 
                                name="tescription"
                                rows='4'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Masukkan Merek Mobil"
                                className="border rounded-md py-2 px-3"
                                ></textarea>
                        </div>
                        <div className="flex flex-col px-4 mb-2">
                            <label htmlFor="lokasi">Lokasi</label>
                            <input 
                                id="lokasi" 
                                name="lokasi"
                                type="text" 
                                value={lokasi}
                                onChange={(e) => setLokasi(e.target.value)}
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