import classes from "./ServiceCard.module.css";
import pointer3 from "../../assets/images/icons/pointer3.svg";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceCard({ img, title, details }) {
  const [showDetails, setShowDetails] = useState(false);

  //defines the degrees in which the arrow img should rotate in both the instances of opened and closed
  const variants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  //handler to toggle the paragraph
  const clickHandler = () => {
    setShowDetails(!showDetails);
  };

  return (
    <motion.article className={`${classes.card}`} layout>
      <img
        className={classes.cardImg}
        src={img}
        alt={`${title} related image`}
      />
      <h3>{title}</h3>
      <motion.button
        onClick={clickHandler}
        whileTap={{ scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <motion.img
          src={pointer3}
          alt="pointer button"
          variants={variants}
          animate={showDetails ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.button>
      <AnimatePresence initial={false} mode="wait">
        {showDetails && (
          <motion.div
            key="details"
            style={{ overflow: "hidden", width: "100%" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.p className="body-text">{details}</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
