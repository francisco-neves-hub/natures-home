import classes from "./Home.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.p
        className={classes.mainText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className={`${classes.rember} title-playfair`}>Remember</span>
        <br></br>
        <span className={`${classes.dreams} title-bodoni`}>dreams?</span>
        <br></br>
        <br></br>
        <span className={`${classes.build} title-playfair`}>
          We build them.
        </span>
      </motion.p>
    </>
  );
}
