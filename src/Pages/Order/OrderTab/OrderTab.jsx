import ProductCard from "../../../Components/SectionTitle/ProductCard/ProductCard";

const OrderTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-20 p-20'>
            {
                items.map(item => <ProductCard
                    key={item._id}
                    item={item}
                ></ProductCard>)
            }
        </div>
    );
};

export default OrderTab;