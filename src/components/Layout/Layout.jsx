import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

export default function Layout() {
  return (
    <>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
}
