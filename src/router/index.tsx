import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Timesheets from "../pages/Timesheets";
import Todo from "../pages/Todo";
import Report from "../pages/Report";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "analytics",
                element: <Analytics />,
            },
            {
                path: "timesheets",
                element: <Timesheets />,
            },
            {
                path: "todo",
                element: <Todo />,
            },
            {
                path: "report",
                element: <Report />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
]);
