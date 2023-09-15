import swiper1 from '../../../assets/Home/popularItems/coverflow1.jpg';
import swiper2 from '../../../assets/Home/popularItems/coverflow2.jpg';
import swiper3 from '../../../assets/Home/popularItems/coverflow3.jpg';
import swiper4 from '../../../assets/Home/popularItems/coverflow4.jpg';
import swiper5 from '../../../assets/Home/popularItems/coverflow5.jpg';
import swiper6 from '../../../assets/Home/popularItems/coverflow6.jpg';
import Title from "../../../Components/SectionTitle/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const PopularItems = () => {
    return (
        <section className="bg-orange-100 py-12">
            <Title
                headTitle={"Popular Items"}
                subTitle={"10% discount"}
            ></Title>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-auto max-w-lg mx-auto" src={swiper1} />
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default PopularItems;