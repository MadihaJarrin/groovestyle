import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/Home/banner1.png'
import banner2 from '../../../assets/Home/banner2.png'
import banner3 from '../../../assets/Home/banner3.png'
import banner4 from '../../../assets/Home/banner4.png'
import banner5 from '../../../assets/Home/banner5.png'
import banner6 from '../../../assets/Home/banner6.jpg'
import banner7 from '../../../assets/Home/banner7.jpg'


const Banner = () => {
    return (

        <div className="flex justify-center">
            <Carousel className="">
                <div>
                    <img src={banner3} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={banner5} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner7} />
                </div>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner4} />
                </div>

                <div>
                    <img src={banner6} />
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;