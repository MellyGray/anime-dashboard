import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DashboardFactory } from "./sections/dashboard/DashboardFactory";
import { Layout } from "./sections/layout/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: DashboardFactory.create(),
			},
		],
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
