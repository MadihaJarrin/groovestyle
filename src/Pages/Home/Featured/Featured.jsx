import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/Home/popularItems/coverflow4.jpg'
import './Featured.css'


const Featured = () => {
    // funtion for current date
    const currentDay = new Date().getDate();
    const currentMonth = new Date().toLocaleString([],
        {
            month: 'long'
        });
    const currentYear = new Date().getFullYear();

    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20  ">

            <SectionTitle
                subHeading="Check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center item-center pb-20 pt-12 px-36 bg-slate-600 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="featued item" />
                </div>
                <div className="md:ml-10">
                    <p>{currentDay} {currentMonth} {currentYear} </p>
                    <p className="uppercase">Where can I get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum mollitia hic distinctio laudantium? Beatae quasi hic fugit doloremque minus, totam reiciendis natus error unde repellat placeat dolorem. Magni, nam? </p>
                    <Link to={'/order/dress'}>
                        <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;