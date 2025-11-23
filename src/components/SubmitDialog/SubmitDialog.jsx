import classes from "./SubmitDialog.module.css";
import { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function SubmitDialog({ open, onClose, status }) {
  const ref = useRef();

  //checks if it should open or close the dialog
  useEffect(() => {
    if (open === true) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return (
    <motion.dialog
      ref={ref}
      onClose={() => onClose()}
      className={classes.dialog}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      {status?.text === "OK" ? (
        <p className="body-text">
          Thank you for sharing your dream with us! We'll be in touch soon.
        </p>
      ) : (
        <p className="body-text">
          Failed to send you an email. Please verify your email address or try
          later.
        </p>
      )}
      <motion.button
        onClick={() => ref.current?.close()}
        whileTap={{ scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        Close
      </motion.button>
    </motion.dialog>
  );
}
