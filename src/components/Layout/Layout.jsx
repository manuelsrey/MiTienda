import Header from "../header//Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Loader from "../loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../Views/Error/Error";

import {
  getProductsLoading,
  getProductsError,
  getProductsThunk,
} from "../../redux/reducers/productsReducer";

export default function Layout() {
  const dispatch = useDispatch();
  const loading = useSelector(getProductsLoading);
  const error = useSelector(getProductsError);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {error && <Error error={error} />}
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}
