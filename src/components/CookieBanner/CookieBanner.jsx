import classes from "./CookieBanner.module.css";
import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  //check if the user already answered the usage of cookies to determine if it should show or not the cookies banner
  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    const declined = localStorage.getItem("cookiesDeclined");

    if (!accepted && !declined) {
      setShowBanner(true);
    }
  }, []);

  //handlers for both the acceptance or decline of cookies usage
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesDeclined", "true");
    setShowBanner(false);
  };

  return (
    //show banner conditionally
    showBanner && (
      <div className={classes.backdrop}>
        <motion.div
          className={classes.banner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="body-text">
            We use cookies to enhance your experience. However, you can opt out
            if you wish.
          </p>
          <div className={classes.buttons}>
            <motion.button
              whileTap={{ scale: [1, 1.05, 0.95, 1] }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={handleAccept}
            >
              <p>Accept</p>
            </motion.button>
            <motion.button
              whileTap={{ scale: [1, 1.05, 0.95, 1] }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={handleDecline}
            >
              <p>Decline</p>
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  );
}
