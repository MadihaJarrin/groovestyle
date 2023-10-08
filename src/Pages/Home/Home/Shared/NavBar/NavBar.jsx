import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error =>
                console.log(error));
    }

    // const navOptions =
    //     <>
    //         <li><a>Item 1</a></li>
    //         <li>
    //             <a>Parent</a>
    //             <ul className="p-2">
    //                 <li><a>Submenu 1</a></li>
    //                 <li><a>Submenu 2</a></li>
    //             </ul>
    //         </li>
    //         <li><a>Item 3</a></li>
    //     </>
    return (

        <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <SearchBar></SearchBar>  </li>
                        <li><Link to='/'>Home</Link></li>

                        <li>
                            <Link to='/categories'>Categoris</Link>
                            <ul className="p-2">
                                <li><a>Clothes</a></li>
                                <li> <Link to='/category'>Shoe</Link></li>
                            </ul>
                        </li>
                        <li><a>Dashboard</a></li>
                        <li><Link to='/about'>About Us</Link></li>
                        {
                            user ? <>
                                <button onClick={handleLogOut} className="btn btn-success">Log out</button>
                            </> : <>
                                <li> <Link to="/login">Login</Link> </li>
                            </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">GROOVE STYLE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <SearchBar></SearchBar>  </li>
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary><Link to='/categories'>Categoris</Link></summary>
                            <ul className="p-2">
                                <li><a>Clothes</a></li>
                                <li><Link to='/category'>Shoe</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Dashboard</a></li>
                    <li><Link to='/about'>About Us</Link></li>
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-success">Log out</button>
                        </> : <>
                            <li> <Link to="/login">Login</Link> </li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn"><Link to='/login'>Account</Link></a>
            </div>
        </div>

    );
};

export default NavBar;