// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import swiper1 from '../../../assets/Home/slider1.jpg';
import swiper2 from '../../../assets/Home/slider2.jpg';
import swiper3 from '../../../assets/Home/slider3.jpg';
import swiper4 from '../../../assets/Home/slider4.jpg';
import swiper5 from '../../../assets/Home/slider5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Collections = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 10 am to 12 pm"}
                heading={"Trendy Collection"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 mt-24"
            >
                <SwiperSlide>
                    <img src={swiper1} alt="" />
                    <h3 className='text-4xl upppercase text-center text-white -mt-16'>Mens</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper2} alt="" />
                    <h3 className='text-4xl upppercase text-center text-white -mt-16'>Girls</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper3} alt="" />
                    <h3 className='text-4xl upppercase text-center text-white -mt-16'>Latest</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper4} alt="" />
                    <h3 className='text-4xl upppercase text-center text-white mt-16'>party </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swiper5} alt="" />
                    <h3 className='text-4xl upppercase text-center text-white -mt-16'>Casual</h3>
                </SwiperSlide>

            </Swiper>
        </section>

    );
};

export default Collections;