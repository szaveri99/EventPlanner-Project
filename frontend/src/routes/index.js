import { useRoutes } from "react-router-dom";
import { ROUTES } from "../constant/routes";
import Category from "../pages/Category/Category";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import MainLayout from "../layout/MainLayout";

function AppRoutes() {
  return useRoutes([
    {
      path: ROUTES.HOME,
      exact: true,
      element:<MainLayout><Home /></MainLayout> ,
    },
    {
      path: ROUTES.EVENT_CATEGORY,
      exact: true,
      element: <MainLayout><Category /></MainLayout>,
    },
    {
      path: ROUTES.CONTACT,
      exact: true,
      element: <MainLayout><Contact /></MainLayout>,
    },
    {
      path: ROUTES.ABOUT,
      exact: true,
      element: <MainLayout><About /></MainLayout>,
    },
    {
      path: ROUTES.SIGNUP,
      exact: true,
      element: <Signup />,
    },
    {
      path: ROUTES.LOGIN,
      exact: true,
      element: <Login />,
    },
  ]);
}
export default AppRoutes;
