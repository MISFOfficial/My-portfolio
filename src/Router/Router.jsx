import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import About from "../Component/About/About";
import Resume from "../Component/Resume/Resume";
import Projects from "../Component/Projects/Projects";
import Contact from "../Component/Contact/Contact";
import Error from "../Component/Error/Error";
import AdminLogin from "../Component/Admin/AdminLogin";
import Deshboard from "../Component/Admin/AdminDeshboard/Deshboard";
import PriveteRout from "../PrivetRout/PriveteRout";
import AboutAdmin from "../Component/Admin/AdminDeshboard/About/AboutAdmin";
import IncludeProject from "../Component/Admin/AdminDeshboard/Projects/IncludeProject";
import AllProjects from "../Component/Admin/AdminDeshboard/Projects/AllProjects";
import SingleProject from "../Component/SingleProject/SingleProject";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                Component: About,
                loader: () => fetch('https://my-portfollio-server.vercel.app/projects')
            },
            {
                path: '/resume',
                Component: Resume
            },
            {
                path: '/projects',
                Component: Projects,
                loader: () => fetch('https://my-portfollio-server.vercel.app/projects')
                // loader: () => projectsLoader 
            },
            {
                path: '/contact',
                Component: Contact
            },
        ]
    },
    {
        path: '/adminlogin',
        Component: AdminLogin
    },
    {
        path: '/deshboard',
        element: <PriveteRout>
            <Deshboard></Deshboard>
        </PriveteRout>,
        children: [
            {
                path: '/deshboard',
                element: <PriveteRout>
                    <AboutAdmin></AboutAdmin>
                </PriveteRout>
            },
            {
                path: '/deshboard/all_project',
                element: <PriveteRout>
                    <AllProjects></AllProjects>
                </PriveteRout>
            },
            {
                path: '/deshboard/upload_project',
                element: <PriveteRout>
                    <IncludeProject></IncludeProject>
                </PriveteRout>
            },
        ]
    },
    {
        path: '/projects/:id',
        Component: SingleProject,
        loader: ({params}) => fetch(`https://my-portfollio-server.vercel.app/projects/${params.id}`)
    }
])