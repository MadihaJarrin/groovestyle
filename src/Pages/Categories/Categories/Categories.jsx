import { Helmet } from 'react-helmet-async';
import useCategories from '../../../Hooks/useCategories';
import AllCategories from '../AllCategories/AllCategories';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ParallaxCover from '../../Home/Home/Shared/ParallaxCover/ParallaxCover';
import CategoriesImg from '../../../assets/Categories/Cover/categoriesCover4.jpg'
import shoesImg from '../../../assets/Categories/Cover/shoescover.jpg'
import dressImg from '../../../assets/Categories/Cover/dresscover.jpg'
import bagsImg from '../../../assets/Categories/Cover/bagscover.jpg'
import offImg from '../../../assets/Categories/off/off1.jpg'
import CountDown from '../../Home/Home/Shared/CountDown/CountDown';
const Categories = () => {
    const [list] = useCategories()
    const shoes = list.filter(item => item.category === 'shoes');
    const dress = list.filter(item => item.category === 'dress');
    const bags = list.filter(item => item.category === 'bags');
    const offered = list.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Groovestyle | Categories</title>
            </Helmet>

            <ParallaxCover img={CategoriesImg} title="our all product"></ParallaxCover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Mega Offer"></SectionTitle>
            <CountDown></CountDown>
            {/* offered menu items */}
            <AllCategories items={offered} title="Offer" img={offImg}></AllCategories>
            {/* dessert menu items  */}
            <AllCategories items={shoes} title="shoes" img={shoesImg}></AllCategories>
            <AllCategories items={dress} title={"dress"} img={dressImg}></AllCategories>
            <AllCategories items={bags} title={"bags"} img={bagsImg}></AllCategories>
        </div>
    );
};

export default Categories;