import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";

const CarMorePage = () => {
    const [car, setCar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:5000/cars/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch car data");
                }
                const data = await response.json();
                setCar(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCar();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="font-poppins">
            <Link to="/car" className="flex  items-center gap-1 text-[#627254] my-3">
                <IoArrowBack size={30} />
                <h1 className="text-xl">Kembali ke car</h1>
            </Link>
            <div className="md:p-3 grid grid-cols-1 md:grid-cols-2">
                <img className="w-auto md:rounded-md bg-center bg-cover " src={`http://localhost:5000/${car.image}`} alt={car.name} />
                <div className="md:p-5 p-3">

                    <h1 className="text-3xl font-bold mt-3 mb-2">{car.name}</h1>
                    <h2 className="inline-block py-1 px-3 rounded-full text-white mb-2  bg-[#627254]">{car.brand}</h2>
                    <p className="mb-2 text-sm  text-justify">{car.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                        <FaLocationDot size={20} className='text-red-500' />
                        <span>{car.location}</span>
                    </div>

                    <div className=" flex flex-col md:flex-row gap-3">
                        <Link to={"/"} className="flex items-center gap-1 bg-[#627254] py-3 px-8 rounded-full text-white" >
                            <GrDocumentUpdate /> 
                            Perbarui Mobil 
                        </Link>
                        <Link to={"/"} className="flex items-center gap-1 bg-red-500 py-3 px-8 rounded-full text-white" >
                            <MdDeleteOutline size={20} />
                            Hapus Mobil 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );    
};
 
export default CarMorePage;
