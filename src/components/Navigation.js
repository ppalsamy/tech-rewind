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
                    path: "about",
                    element: <About />
                },
                {
                    path: "books",
                    element: <Books />
                },
                {
                    path: "finance",
                    element: <Finance />
                },
                {
                    path: "blogs",
                    element: <Blogs />,
                    children: [
                        {
                            path: "/blogs/pair",
                            element: <Article name='Pair_programming.md' />
                        },
                        {
                            path: "/blogs/tdd",
                            element: <Article name='tdd.md' />
                        },
                        {
                            path: "/blogs/devops",
                            element: <Article name='devops.md' />
                        },
                        {
                            path: "/blogs/perf-test",
                            element: <Article name='PerformanceTest.md' />
                        },
                        {
                            path: "/blogs/contract-test",
                            element: <Article name='ContractTest.md' />
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