import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([{
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
    ]
}])