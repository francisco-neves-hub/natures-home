import classes from "./Catalogue.module.css";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import giza from "../assets/images/photos/giza.jpg";
import pointer3 from "../assets/images/icons/pointer3.svg";
import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect, useRef } from "react";

export default function Catalogue() {
  const mainRef = useRef();
  const [showGal, setShowGal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  //sets the degrees the arrow buttons should rotate when animated
  const variants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  //pre-loads the images in the page before rendering it, resulting in smoother animations
  useEffect(() => {
    async function preLoadImage() {
      const promise = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = giza;
      });
      await promise;
      setLoaded(true);
    }
    preLoadImage();
  }, []);

  //handles the toggle of the gallery and the movement of the scroll bar accordingly
  const clickHandler = () => {
    if (showGal) {
      const contentWrapper = document.querySelector(
        ".simplebar-content-wrapper"
      );
      contentWrapper?.scrollTo({ top: 665, behavior: "smooth" });
    }
    setShowGal(!showGal);
  };

  return (
    <main ref={mainRef} className="frame">
      {loaded ? (
        <>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
          >
            Catalogue
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0, delayChildren: 0.3 },
              },
            }}
          >
            <motion.article
              className={classes.article}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <img src={giza} alt="giza model photo" />
              <div className={classes.details}>
                <h3>Santana Model</h3>
                <p className="body-text">
                  We produdly present to you the Santana Model. Being naturally
                  atracted by nature, our team found itself in the archipelago
                  of Madeira, Portugal, where inspiration struck us. In the
                  traditional houses of Santana, we saw the draft for something
                  that could transcend what was made out of necessity, into
                  something made out of artistic pursuit. And what a vision it
                  has become. But don't just take our word for it, browse our
                  gallery and judge for yourself.
                </p>
              </div>
              <motion.button
                onClick={clickHandler}
                whileTap={{ scale: [1, 1.05, 0.95, 1] }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <motion.img
                  src={pointer3}
                  alt="pointer button"
                  variants={variants}
                  animate={showGal ? "open" : "closed"}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.button>
            </motion.article>
            <AnimatePresence initial={false} mode="wait">
              {showGal && <Gallery />}
            </AnimatePresence>
          </motion.div>
        </>
      ) : (
        <div className={classes.load}>
          <h3 className={classes.loading}>Loading...</h3>
        </div>
      )}
    </main>
  );
}
