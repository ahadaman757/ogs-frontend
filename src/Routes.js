import React from 'react'
import Home from './Pages/Homepage/Home'
import Registeration from './Pages/authpages/Registeration';
import CV from './Pages/Forms/CV';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "register",
        element: <Registeration />,
    },
    {
        path: "cv",
        element: <CV />,
    },
]);
function Routes() {
    return (
        <RouterProvider router={router} />
    )
}

export default Routes