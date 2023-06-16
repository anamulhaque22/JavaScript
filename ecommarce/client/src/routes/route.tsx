import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import Analytics from "../components/Dashboard/Analytics/Analytics";
import ProductList from "../components/Dashboard/ProductList/ProductList";
import AddProductForm from "../components/Dashboard/AddProduct/AddProductForm";
import EditProductForm from "../components/Dashboard/EditProduct/EditProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      { path: "/dashboard", element: <Analytics /> },
      { path: "/dashboard/product-list", element: <ProductList /> },
      { path: "/dashboard/add-product", element: <AddProductForm /> },
      { path: "/dashboard/edit-product", element: <EditProductForm /> },
    ],
  },
]);

export default router;
