
const Cover = ({ img }) => {
    return (
        <div className=" hero min-h-screen mb-20"
            style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-6xl italic font-bold text-white   ">GrooveStyle Story </h1>
                    <p className="mb-5 text-justify text-white   ">GrooveStyle is an innovative E-commerce website aiming to revolutionize online shopping. Our digital platform aims to improve the shopping experience by offering advanced features to cater to modern consumer needs.</p>
                    <button className="btn outline outline-offset-2  outline-4  outline-pink-500 mt-8
                    hover:bg-pink-400 focus:ring-violet-300 hover:text-white">Know More...</button>

                </div>
            </div>
        </div>
    );
};

export default Cover;