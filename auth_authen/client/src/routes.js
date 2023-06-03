import {createBrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AddProductPage from "./pages/AddProductPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        { path: "/",  element: <Home/> },
        { path: '/login', element: <LoginPage/> },
        { path : "/registration", element: <RegistrationPage/>},
        {path: '/addProduct', element: <PrivateRoute><AddProductPage/></PrivateRoute>}
    ]
  },
]);

export default router;