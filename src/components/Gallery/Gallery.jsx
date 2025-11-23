import classes from "./Gallery.module.css";
import { useLoaderData } from "react-router-dom";
import pointerRight from "../../assets/images/icons/pointerRight.svg";
import pointerLeft from "../../assets/images/icons/pointerLeft.svg";
import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Gallery() {
  //loads the array of photos routed in App.jsx from the loaders.js file in the helpers folder
  const photoGallery = useLoaderData();

  const [index, setIndex] = useState(0);

  const galleryRef = useRef(null);

  //scrolls the gallery into and out of view 
  useEffect(() => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  //receives the instruction to go up or down in the index position of the array of photos and handles it
  const clickHandler = (indexModifier) => {
    const newIndex = indexModifier + index;

    if (newIndex < 0) {
      setIndex(15);
    } else if (newIndex > 15) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <motion.div
      ref={galleryRef}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
      className={classes.gallery}
    >
      <motion.button
        onClick={() => {
          clickHandler(-1);
        }}
        whileTap={{ scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={classes.leftButton}
      >
        <img src={pointerLeft} alt="Left button icon" />
      </motion.button>

      {/* Gallery image on display */}
      <img 
        className={classes.photo}
        src={photoGallery[index]}
        alt="house photo"
      />
      
      <motion.button
        onClick={() => {
          clickHandler(1);
        }}
        whileTap={{ scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={classes.rightButton}
      >
        <img src={pointerRight} alt="Right button icon" />
      </motion.button>
    </motion.div>
  );
}
