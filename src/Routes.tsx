import type { RouteObject } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import UserPanel from "./Pages/UserPanel";
import UserCart from "./Pages/UserCart";
import Checkout from "./Pages/Checkout";
import Articles from "./Pages/Articles";
import ArticlesDetail from "./Pages/ArticlesDetail";
import Coursses from "./Pages/Coursses";
import CourseDetail from "./Pages/CourseDetail";
import Session from "./Pages/Session";


// for test
const isLoggedIn = false;

const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <LogIn /> },

    {
        element: <ProtectedRoute isAllowed={isLoggedIn} />, children: [
            { path: "/userpanel", element: <UserPanel /> },
            { path: "/usercart", element: <UserCart /> },
            { path: "/checkout", element: <Checkout /> },
        ],
    },

    { path: "/articles", element: <Articles /> },
    { path: "/articles/:articleName", element: <ArticlesDetail /> },
    { path: "/courses", element: <Coursses /> },

    {
        path: "/courses/:courseDetail", element: <CourseDetail />, children: [
            { path: ":session", element: <Session /> },
        ],
    },
];

export default routes;
