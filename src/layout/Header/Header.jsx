import classes from "./Header.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/images/logo/logo-2-white.svg";
import burger from "../../assets/images/icons/burger.svg";
import TopNavLi from "../../components/TopNavLi";
import { BurgerMenuContext } from "../../store/burger-menu-context";

export default function Header() {
  const location = useLocation();
  const {toggleBurgerMenu} = useContext(BurgerMenuContext);

  return (
    <nav
      className={
        location.pathname === "/"
          ? `${classes.nav} glass`
          : `${classes.nav} brownGlass`
      }
    >
      <div className={classes.logo}>
        <img src={logo} />
        <p>
          Nature's<br></br>Home
        </p>
      </div>
      <motion.ul className={classes.menu} layout>
        <TopNavLi name="Home" url="/" end={true} />
        <TopNavLi name="About Us" url="/about-us" end={false} />
        <TopNavLi name="Catalogue" url="/catalogue" end={false} />
        <TopNavLi name="Services" url="/services" end={false} />
        <TopNavLi name="Contacts" url="contacts" end={false} />
      </motion.ul>
      <button className={classes.burgerBtn} onClick={() => toggleBurgerMenu()}>
        <img src={burger} alt="burger logo" />
      </button>
    </nav>
  );
}
