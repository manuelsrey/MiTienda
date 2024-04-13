import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Layout from "../components/Layout/Layout";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import CartSummary from '../components/CartSummary/CartSummary'
import LoginForm from "../components/LoginForm/LoginForm";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import NotFound from '../views/NotFound/NotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                children: [
                    { 
                        path: "/",
                        element: <ProductsSection />
                    },
                    {
                        path: "/product/:productId",
                        element: (
                            <ProtectedRoute>
                                <ProductDetails />
                            </ProtectedRoute>
                        )
                    },
                    {
                        path: "/cart",
                        element: (
                            <ProtectedRoute>
                                <CartSummary />
                            </ProtectedRoute>
                        )
                    },
                    {
                        path: "/login",
                        element: <LoginForm />
                    }
                ]
            }
        ]
    }
]);