import Shoes from "../../Category/Shoes/Shoes";
import Banner from "../Banner/Banner";
import Collections from "../Collections/Collections";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Groovestyle | Home</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <Banner></Banner>
            <Collections></Collections>
            <PopularItems></PopularItems>
            <Shoes></Shoes>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;