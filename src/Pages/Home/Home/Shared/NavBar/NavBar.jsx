import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import SearchBar from "../SearchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import useCart from "../../../../../Hooks/useCarts";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error =>
                console.log(error));
    }



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
                            <ul className="p-2 bg-fuchsia-700">

                                <li> <Link to='/order/dress'>clothes</Link></li>
                                <li> <Link to='/order/shoes'>Shoes</Link></li>
                                <li> <Link to='/order/bags'>Bags</Link></li>

                            </ul>
                        </li>
                        <li><a>Dashboard</a></li>
                        <li><Link to="/order/dress">Our Shop</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li>
                            <Link to="/dashboard/mycart">
                                <button className="btn gap-2">
                                    <FaShoppingCart></FaShoppingCart>

                                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </button>
                            </Link>
                        </li>
                        {
                            user ? <>
                                <span>{user?.displayName}</span>
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
                            <summary><Link to='/categories'>Categories</Link></summary>
                            <ul className="p-2 bg-fuchsia-700">

                                <li> <Link to='/order/dress'>clothes</Link></li>
                                <li> <Link to='/order/shoes'>Shoes</Link></li>
                                <li> <Link to='/order/bags'>Bags</Link></li>

                            </ul>
                        </details>
                    </li>
                    <li><a>Dashboard</a></li>
                    <li><Link to="/order/dress">Our Shop</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li>
                        <Link to="/dashboard/mycart">
                            <button className="btn gap-2">
                                <FaShoppingCart></FaShoppingCart>

                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </button>
                        </Link>
                    </li>

                    {/* {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-success">Log out</button>
                        </> : <>
                            <li> <Link to="/login">Login</Link> </li>
                        </>
                    } */}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn rounded-full "><Link to='/login'>Account</Link></a> */}
                {/* {
                    user ? <>
                        <button onClick={handleLogOut} className="btn btn-success">Log out</button>
                    </> : <>
                        <button> <Link to="/login">Login</Link></button>
                    </>
                } */}

                <div className="avatar placeholder ">
                    <div className="bg-neutral-focus text-white  rounded-full w-24 ring ring-primary ring-offset-base-100 ring-offset-4 text-2xl">
                        {
                            user ? <>
                                <button onClick={handleLogOut} >Log out</button>
                            </> : <>
                                <button> <Link to="/login">Login</Link></button>
                            </>
                        }                    </div>
                </div>
            </div>

        </div>

    );
};

export default NavBar;