
import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import aboutCover from '../../assets/About/cover.jpg'

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Groovestyle | About Us</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <Cover img={aboutCover}></Cover>
        </div>
    );
};

export default AboutUs;