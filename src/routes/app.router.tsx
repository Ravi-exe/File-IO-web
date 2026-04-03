import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SigninPage from "../pages/signin/signin.page"; "../pages/signin/signin.page";
import Sidebar from "../components/sidebar/sidebar.component";
import SignupPage from "../pages/signup/signup.page";
import Dashboard from "../pages/dashboard/dashboard.page";


export default function AppRouter() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"login"} />,
    //   children: [],
    },
    {
      path: "/login",
      element: <SigninPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={route} />;
}
