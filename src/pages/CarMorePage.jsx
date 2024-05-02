import { IoArrowBack } from "react-icons/io5";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from 'react-toastify';

const CarMorePage = () => {
    const [car, setCar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const history = useNavigate();

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
                setError("Failed to load car details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchCar();
    }, [id]);

    // Delete car
    const handleDelete = async () => {
        if (window.confirm("Apakah Kamu Yakin Menghapus Mobil Kamu?")) {
            try {
                const response = await fetch(`http://localhost:5000/cars/${id}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error('Failed to delete car');
                }
                toast.error("berhasil Menghapus Mobil")
                history('/car'); // diarahkan ke halaman car setelah penghapusan
            } catch (error) {
                console.error('Error deleting car:', error);
                setError('Failed to delete car');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="font-poppins">
            <Link to="/car" className="flex items-center gap-1 text-[#627254] my-3">
                <IoArrowBack size={30} />
                <h1 className="text-xl">Back to Cars</h1>
            </Link>
            <div className="md:p-3 grid grid-cols-1 md:grid-cols-2">
                <img src={car.image} alt="" className="w-full h-full object-cover rounded-md"
                 />
                <div className="md:p-5 p-3 ">
                    <h1 className="text-3xl font-bold mt-3 mb-2">{car.title}</h1>
                    <h2 className="inline-block py-1 px-3 rounded-full text-white mb-2 bg-[#627254]">{car.brand}</h2>
                    <p className="mb-2 text-sm md:text-normal">{car.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                        <FaLocationDot size={20} className='text-red-500' />
                        <span>{car.location}</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                        <Link to={`/car-update/${car.id}`} className="flex items-center gap-1 bg-[#627254] py-3 px-8 rounded-full text-white">
                            <GrDocumentUpdate /> Update Car
                        </Link>
                        <button className="flex items-center gap-1 bg-red-500 py-3 px-8 rounded-full text-white" onClick={handleDelete}>
                            <MdDeleteOutline size={20} />
                            Delete Car
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );    
};

export default CarMorePage;

