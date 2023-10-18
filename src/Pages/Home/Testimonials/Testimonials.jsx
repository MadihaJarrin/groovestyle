import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";



const Testimonials = () => {


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="p-5">
            <SectionTitle
                heading={"Remembrance"}
                subHeading={"What our client say"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper
             bg-red-100 shadow-inner
             shadow-cyan-400/50 rounded-full mb-10">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                        >

                            <div className="flex flex-col items-center mx-24 my-16  ">
                                {/* <h2>REVIEWS COUNT : {reviews.length}</h2> */}

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                >

                                </Rating>


                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>

                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;