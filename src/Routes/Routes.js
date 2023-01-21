import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import PremiumCourses from "../components/PremiumCourses";
import Pricing from "../components/Pricing";
import Main from "../layout/Main";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

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
        {
            path: '/pricing',
            element: <PrivateRoute><Pricing></Pricing></PrivateRoute>
        },
        {
            path: '/paid-course',
            element: <PremiumCourses></PremiumCourses>,
            loader: () => fetch('https://code-lab-server.vercel.app/paid-course')
        },
        {
            path: '/course',
            element: <Courses></Courses>,
            loader: () => fetch('https://code-lab-server.vercel.app/free')
        },
        {
            path: '/course/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) => fetch(`https://code-lab-server.vercel.app/course/${params.id}`)
        }
    ]
}])