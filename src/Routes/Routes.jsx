import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/About Us/AboutUs";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Categories from "../Pages/Categories/Categories/Categories";
import Order from "../Pages/Order/Order/Order";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Home/Home/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Reviews from "../Pages/Reviews/Reviews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'categories',
                element: <Categories></Categories>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'order/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes> <Secret></Secret> </PrivateRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]

    }
]);