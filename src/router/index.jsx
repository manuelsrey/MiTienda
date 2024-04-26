import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Cart from "../components/Cart/Cart";
import LoginForm from "../components/Login/LoginForm";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProtectedRouter from "../components/ProtectedRouter/ProtectedRouter";
import NotFound from "../components/NotFound/NotFound"

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
    element: <NotFound />,
  },
]);
