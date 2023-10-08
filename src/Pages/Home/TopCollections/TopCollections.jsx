
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import useCategories from '../../../Hooks/useCategories';
import ListItems from '../Home/Shared/ListItems/ListItems';

const TopCollections = () => {
    const [list] = useCategories()
    const topCollections = list.filter(item => item.category === 'popular');

    // const [list, setList] = useState([])
    // useEffect(() => {
    //     fetch('Items.json')
    //         .then(res => res.json()) //convert response to json
    //         .then(data => {
    //             const topCollections = data.filter(item => item.category === 'popular'); //filter popular items only
    //             setList(topCollections)
    //         })
    // }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                heading="Top Collection"
                subHeading="10% discount on"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-20 p-20">
                {
                    topCollections.map(item => <ListItems
                        key={item._id}
                        item={item} //send item to listitems
                    ></ListItems>)
                }
                <button className="btn btn-outline border-0 border-b-4 mt-4">View All Collections</button>
            </div>
        </section>
    );
};

export default TopCollections;