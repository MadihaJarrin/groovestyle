
import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import aboutCover from '../../assets/About/cover.jpg'
// import chatBubble from '../../assets/About/25.jpg'
import ChatBubble from './ChatBubble';
import Contact from './Contact/Contact';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Groovestyle | About Us</title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <Cover img={aboutCover}></Cover>
            <Contact></Contact>
            <ChatBubble ></ChatBubble>
        </div>
    );
};

export default AboutUs;