import ListItems from "../../Home/Home/Shared/ListItems/ListItems";
import ParallaxCover from "../../Home/Home/Shared/ParallaxCover/ParallaxCover";

const AllCategories = ({ items, title, img }) => {
    return (
        // <div>
        //     <div className="grid md:grid-cols-2 gap-20 p-20">
        //         {title && <ParallaxCover img={img} title={title}></ParallaxCover>}

        //         {
        //             items.map(item => <ListItems
        //                 key={item._id}
        //                 item={item} //send item to listitems
        //             ></ListItems>)
        //         }

        //         <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

        //     </div>
        // </div>
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
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

        </div>
    );
};

export default AllCategories;