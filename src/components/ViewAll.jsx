import { Link } from "react-router-dom";
const ViewAll = () => {
    return (
        <section>
            <div className="py-20 w-full bg-[#627254] mt-3 ">
                    <Link to="/car" className="block mx-auto  max-w-lg bg-[#DDDDDD] text-[#627254] text-center px-3 py-2  rounded-md">View All Car</Link>
            </div>
        </section>
    )
}
export default ViewAll;