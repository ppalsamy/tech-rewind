import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Blogs from "./Blogs";
import Books from "./Books";
import Finance from "./Finance";
import Landing from "./Landing";
import ContentReader from './ContentReader';
import Openai from './Openai';

function Navigation() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />,
            children: [
                {
                    path: "About",
                    element: <About />
                },
                {
                    path: "Books",
                    element: <Books />
                },
                {
                    path: "Finance",
                    element: <Finance />
                },
                {
                    path: "Blogs",
                    element: <Blogs />,
                    children: [
                        {
                            path: "/Blogs/Pair",
                            element: <About />
                        },
                        {
                            path: "/Blogs/Openai",
                            element: <Openai />
                        },
                        {
                            path: "/Blogs/Devops",
                            element: <ContentReader />
                        },
                    ]
                },
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default Navigation;