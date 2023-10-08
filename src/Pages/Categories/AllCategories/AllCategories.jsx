import ListItems from "../../Home/Home/Shared/ListItems/ListItems";

const AllCategories = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-20 p-20">
                {
                    items.map(item => <ListItems
                        key={item._id}
                        item={item} //send item to listitems
                    ></ListItems>)
                }
                <button className="btn btn-outline border-0 border-b-4 mt-4">View All Collections</button>
            </div>
        </div>
    );
};

export default AllCategories;