import classes from "./BurgerMenu.module.css";
import { useContext, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { BurgerMenuContext } from "../../store/burger-menu-context";
import TopNavLi from "../TopNavLi";

export default function BurgerMenu() {
  const { open, closeBurgerMenu } = useContext(BurgerMenuContext);
  const location = useLocation();

  //close the burger menu upon route change
  useEffect(() => {
    closeBurgerMenu();
  }, [location.pathname, closeBurgerMenu]);

  return (
    <AnimatePresence>
      {open && (
        //div containing the burger menu
        <motion.div
          className={classes.visible}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
        >
          <ul
            className={`${classes.menu} ${
              location.pathname === "/" ? "glass" : "brownGlass"
            }`}
          >
            <TopNavLi name="Home" url="/" end={true} />
            <TopNavLi name="About Us" url="/about-us" end={false} />
            <TopNavLi name="Catalogue" url="/catalogue" end={false} />
            <TopNavLi name="Services" url="/services" end={false} />
            <TopNavLi name="Contacts" url="/contacts" end={false} />
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
