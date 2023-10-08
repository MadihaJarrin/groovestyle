import banner1 from '../../assets/Categories/Shoes/shoes1.jpg'
const CategoryCover = () => {
    return (
        <div className="carousel carousel-center rounded-box  md:max-h-screen ">
            <div className="carousel-item">
                <img className='' src={banner1} alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src={banner1} alt="shoes" />
            </div>
            <div className="carousel-item">
                <img src={banner1} alt="shoes" />
            </div>
            <div className="carousel-item">
                <img src={banner1} alt="shoes" />
            </div>
            <div className="carousel-item">
                <img src={banner1} alt="shoes" />
            </div>
            <div className="carousel-item">
                <img src={banner1} alt="shoes" />
            </div>

        </div>
    );
};

export default CategoryCover;