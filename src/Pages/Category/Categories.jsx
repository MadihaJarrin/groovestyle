import { Helmet } from 'react-helmet-async';
import Shoes from './Shoes/Shoes';
import CategoryCover from './CategoryCover';

const Categories = () => {
    return (
        <div>
            <Helmet>
                <title>Groovestyle | Categories</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <CategoryCover></CategoryCover>
            <Shoes></Shoes>
        </div>
    );
};

export default Categories;