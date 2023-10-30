import Banner from "../Banner/Banner";
import Collections from "../Collections/Collections";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';
import TopCollections from "../TopCollections/TopCollections";
import CountDown from "./Shared/CountDown/CountDown";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Groovestyle | Home</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <Banner></Banner>
            <SectionTitle subHeading="Don't Miss" heading="Mega Offer"></SectionTitle>
            <CountDown></CountDown>
            <Collections></Collections>
            <PopularItems></PopularItems>
            <TopCollections></TopCollections>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;