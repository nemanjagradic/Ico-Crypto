import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/Main Navigation/MainNavigation";
import Footer from "../components/Layout/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
