import Banner from "../Banner/Banner";
import Collections from "../Collections/Collections";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <PopularItems></PopularItems>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;