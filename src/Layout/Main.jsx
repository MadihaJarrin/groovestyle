import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import NavBar from "../Pages/Home/Home/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const exceptHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div>
            {exceptHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {exceptHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;