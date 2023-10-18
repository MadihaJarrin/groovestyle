import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaHome, FaShopify } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { MdCategory } from 'react-icons/md';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open sidebar</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  bg-yellow-300">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home </NavLink> </li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations </NavLink> </li>
                    <li><NavLink to='/dashboard/mycart' ><FaShoppingCart></FaShoppingCart>My Cart</NavLink> </li>
                    <li><NavLink to='/dashboard/history'><GiWallet></GiWallet>Payment History</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> Home </NavLink> </li>
                    <li><NavLink to='/categories'><MdCategory></MdCategory> Categories</NavLink></li>
                    <li><NavLink to="/order/dress"><FaShopify></FaShopify> Our Shop</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;