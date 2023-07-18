import {
    createBrowserRouter
} from "react-router-dom";
import React from "react";
import Home from "../layout/home";
import { Login } from "../layout/login";
import { Directory } from "../layout/directory";

const paths = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/directory",
        element: <Directory/>
    }
]
export const router = createBrowserRouter(paths)