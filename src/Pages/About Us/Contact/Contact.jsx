import './Contact.css'
const Contact = () => {
    return (
        <div className="about-cont max-w-screen-lg h-auto mx-auto rounded-full ">
            <div className="pt-20px border-end border-danger">
                <img style={{ width: "700px" }} src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-2706072-2260980.png" alt="" />
            </div>
            <div className="about border-end border-info ">
                <h3 className='text-4xl italic '> Please Contact With us</h3>
                <form className='mb-6' >
                    <input placeholder="Your Name" />
                    <input type="text" placeholder="Your Email" />
                    <textarea placeholder="Your Query" />
                    <button className="btn btn-accent">Submit</button>
                </form>
            </div>
            <div className="about border-end border-info  mx-auto ">
                <h2 className='text-4xl italic'>Contact with us </h2>
                <h5 className='font-bold'>Our Email:<a href="https://github.com/MadihaJarrin/groovestyle">groovestyle@gmail.com</a></h5>
                <h5 className='font-bold'>Contact Number: +986524735</h5>
            </div>
            <div id="about-last">
                <img src="https://www.pinclipart.com/picdir/big/337-3379122_technical-support-and-website-maintenance-contact-us-vector.png" alt="" />
            </div>

        </div>
    );
};

export default Contact;