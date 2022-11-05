import React from "react";
import ReactDOM from "react-dom"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import LoginPage from "./Components/LoginPage";
import ErrorPage from "./Components/ErrorPage";
import RegisterPage from "./Components/RegisterPage";
import PostsPage from "./Components/PostsPage";
import HomePage from "./Components/HomePage";
import NewPost from "./Components/NewPost";
import ProfilePage from "./Components/ProfilePage";
// import { element } from "prop-types";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/LoginPage",
                element: <LoginPage />
            },
            {
                path: "/PostsPage",
                element: <PostsPage/>
            },
            {
                path: "/RegisterPage",
                element: <RegisterPage/>
            },
            {
                path: "/NewPost",
                element: <NewPost/>

            },
            {
                path: "/ProfilePage",
                element: <ProfilePage/>

            }
          
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"))