import { Link } from "react-router-dom";
import ListItems from "../../Home/Home/Shared/ListItems/ListItems";
import ParallaxCover from "../../Home/Home/Shared/ParallaxCover/ParallaxCover";

const AllCategories = ({ items, title, img }) => {
    return (
        <div className='p-20'>
            {title && <ParallaxCover img={img} title={title}></ParallaxCover>}
            <div className="grid md:grid-cols-2 gap-10 my-16 px-10">
                {
                    items.map(item => <ListItems
                        key={item._id}
                        item={item}
                    ></ListItems>)
                }
            </div>
            <Link to={`/order/${title}`} className="flex justify-center">
                <button className="btn btn-outline bg-yellow-500 border-0 border-b-4 mt-4 ">Order your desire Now</button>
            </Link>
        </div>
    );
};

export default AllCategories;