import classes from "./RootLayout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Header/Header.jsx";
import Footer from "../layout/Footer/Footer.jsx";
import BurgerContextProvider from "../store/BurgerContextProvider.jsx";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu.jsx";
import CookieBanner from "../components/CookieBanner/CookieBanner.jsx";

export default function RootLayout() {
  //Checking if the loaded component is the home page
  const location = useLocation();

  //check if the width of the screen is a small 
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      className={
        location.pathname === "/"
          ? `${classes.bgImage} ${classes.frame}`
          : `${classes.bgColor} ${classes.frame}`
      }
    >
      <BurgerContextProvider>
        <Header />
        {/* Div designed to control the behaviour of the content being exposed */}
        <div className={classes.outlet}>
          {isMobile && <BurgerMenu />}
          <Outlet />
        </div>
      </BurgerContextProvider>
      <CookieBanner />
      <Footer />
    </div>
  );
}
