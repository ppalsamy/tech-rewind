import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import About from "./About";
import Books from "./Books";
import Landing from "./Landing";
import Blogs from './Blogs';
import BlogReader from "./BlogReader";

function Navigation() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/about" replace />,
                    // when user navigate to / it automaticly navigate to /about
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "books",
                    element: <Books />
                },

                {
                    path: "blogs",
                    element: <Blogs />
                },
                {
                    path: "blogs/:title",
                    element: <BlogReader />,

                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Navigation;