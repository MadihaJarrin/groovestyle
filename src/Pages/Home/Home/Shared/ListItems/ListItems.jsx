
const ListItems = ({ item }) => {
    const { name, price, description, image } = item

    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[320px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-------------</h3>
                <p>{description}</p>
            </div>
            <dir>
                <p className="text-yellow-500">${price}</p>
            </dir>
        </div>
    );
};
export default ListItems;