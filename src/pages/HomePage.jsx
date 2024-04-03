import Card from "../components/Card";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
    return (
        <>
            <section className="font-poppins">
                <Hero/>
                <HomeCard/>
                <Card/>
                <ViewAll/>      
            </section>
        </>
    )
}

export default HomePage;