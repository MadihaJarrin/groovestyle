import { Helmet } from 'react-helmet-async';
import useCategories from '../../../Hooks/useCategories';
import AllCategories from '../AllCategories/AllCategories';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ParallaxCover from '../../Home/Home/Shared/ParallaxCover/ParallaxCover';
import CategoriesImg from '../../../assets/Categories/Cover/categoriesCover4.jpg'

const Categories = () => {
    const [list] = useCategories()
    // const shoes = list.filter(item => item.category === 'shoes');
    // const dress = list.filter(item => item.category === 'dress');
    // const bags = list.filter(item => item.category === 'bags');
    const offered = list.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Groovestyle | Categories</title>
            </Helmet>
            <ParallaxCover img={CategoriesImg} title="All Categories" ></ParallaxCover>
            <SectionTitle
                heading="Offered Items"
                subHeading="5% discount on"
            >
            </SectionTitle>
            <AllCategories
                items={offered}
            ></AllCategories>
        </div>
    );
};

export default Categories;