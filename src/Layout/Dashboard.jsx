import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaHome, FaShopify, FaUsers, FaPhoneVolume } from 'react-icons/fa';
import { MdCategory, MdManageHistory, MdAdminPanelSettings } from 'react-icons/md';
import useCart from "../Hooks/useCarts";


const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;
    // const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open  ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col px-20 ">

                {/* Page content here items-center justify-center */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open sidebar</label>
            </div>

            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  bg-yellow-500">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'><MdAdminPanelSettings></MdAdminPanelSettings> Admin Home </NavLink> </li>
                            <li><NavLink to='/dashboard/addItem'><FaCalendarAlt></FaCalendarAlt> Add Items </NavLink> </li>
                            <li><NavLink to='/dashboard/manageItems'><MdManageHistory></MdManageHistory> Manage Items</NavLink></li>
                            {/* <li><NavLink to='/dashboard/history'><MdManageAccounts></MdManageAccounts> Manage Bookings</NavLink></li> */}
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>Manage All Users</NavLink></li>
                        </> : <>
                            {/* Sidebar content here */}
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home </NavLink> </li>
                            <li><NavLink to='/dashboard/payment'><FaCalendarAlt></FaCalendarAlt> Reservations </NavLink> </li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                        </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home </NavLink> </li>
                    <li><NavLink to='/categories'><MdCategory></MdCategory> Categories</NavLink></li>
                    <li><NavLink to="/order/dress"><FaShopify></FaShopify> Order</NavLink></li>
                    <li><NavLink to="/order/reviews"><FaShopify></FaShopify> Reviews</NavLink></li>
                    <li><NavLink to="/about"><FaPhoneVolume></FaPhoneVolume> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;


