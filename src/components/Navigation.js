import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Blogs from "./Blogs";
import Books from "./Books";
import Finance from "./Finance";
import Landing from "./Landing";
import Article from './Article';

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
                            element: <Article name='Pair_programming.md' />
                        },
                        {
                            path: "/Blogs/Tdd",
                            element: <Article name='tdd.md' />
                        },
                        {
                            path: "/Blogs/Devops",
                            element: <Article name='devops.md' />
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