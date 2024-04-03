import { Link } from "react-router-dom";

const  HomeCard = () => {
    return (
        <>
        <div className="grid grid-cols-2 gap-3 mx-3  md:mx-6 mt-10 md:mt-0 mb-10">
            <div className="bg-[#627254] p-2 md:p-4 rounded-md shadow-md">
                <h1  className="text-xl md:text-2xl text-[#DDDDDD] font-bold capitalize mb-2">Lihat Koleksi</h1>
                <p className="mb-2 text-sm md:text-normal text-[#DDDDDD]">Cari mobil yang ingin kamu lihat sekarang</p>
                <Link to='/car' className=" max-w-sm block bg-[#DDDDDD] text-[#627254] text-center px-3 py-1  rounded-md">Cari Mobil</Link>
            </div>
            <div className="bg-[#627254] p-2 md:p-4 rounded-md shadow-md">
                <h1  className="text-xl md:text-2xl text-[#DDDDDD] font-bold capitalize mb-2">TambahKoleksi</h1>
                <p className="mb-2 text-sm md:text-normal text-[#DDDDDD]">Tambahkan Koleksi mobil yang belum ada</p>
                <Link to='/add-car' className=" max-w-sm block bg-[#DDDDDD] text-[#627254] text-center px-3 py-1  rounded-md">Tambah Mobil</Link>
            </div>
            
        </div>
        </>
    )
} 
export default HomeCard;