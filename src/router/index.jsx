import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Error from "../Views/Error/Error";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Cart from "../Views/Cart/Cart";
import LoginForm from "../Views/LoginForm/LoginForm";
import ProtectedRouter from "../components/ProtectedRouter/ProtectedRouter";
import ProductDetails from "../Views/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductsSection />,
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedRouter>
            <ProductDetails />
          </ProtectedRouter>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRouter>
            <Cart />
          </ProtectedRouter>
        ),
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
