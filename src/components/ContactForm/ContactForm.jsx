import classes from "./ContactForm.module.css";
import { useRef, useEffect } from "react";
import { Form } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactForm({
  reset,
  warnings,
  sending,
  onFocus,
  resetHandler,
}) {
  const formRef = useRef();
  const scrollRoot = useRef();
  const scrollContainer = useRef();

  //tracking the position of the scroll bar to trigger the change in opacity
  useEffect(() => {
    scrollRoot.current = document.querySelector(".simplebar-content-wrapper");
  }, []);

  const { scrollY } = useScroll({
    container: scrollRoot,
    target: formRef,
    offset: ["start end", "end start"],
  });

  //changing the opacity using the position of the scroll bar
  const opacityForm = useTransform(scrollY, [0, 150], [0, 1]);

  //gives the order to change back the reset value to false in the Contacts page
  //this was necessary because once reset was true, even if the user tried sending an email and the address was flawed, the data was still being reset
  useEffect(() => {
    if (reset) {
      formRef.current.reset();
      resetHandler(); 
    }
  }, [reset, resetHandler]);

  return (
    <motion.div ref={scrollContainer} style={{ opacity: opacityForm }}>
      <Form
        ref={formRef}
        style={{ opacity: opacityForm }}
        method="post"
        className={`${classes.form} glass-bordered`}
      >
        <h3>Share your dream:</h3>

        {/* First Name input area */}
        <div className={classes.input}>
          <input
            className="body-text"
            placeholder="*First Name"
            id="firstName"
            type="text"
            name="firstName"
            onFocus={() => onFocus("firstName")}
            //required
          />
          <p className={warnings?.firstName ? classes.warning : classes.none}>
            {warnings?.firstName}
          </p>
        </div>

        {/* Last Name input area */}
        <div className={classes.input}>
          <input
            className="body-text"
            placeholder="*Last Name"
            id="lastName"
            type="text"
            name="lastName"
            onFocus={() => onFocus("lastName")}
            //required
          />
          <p className={warnings?.lastName ? classes.warning : classes.none}>
            {warnings?.lastName}
          </p>
        </div>

        {/* Company Name input area */}
        <div className={classes.input}>
          <input
            className="body-text"
            placeholder="Company Name"
            id="companyName"
            type="text"
            name="companyName"
            onFocus={() => onFocus("companyName")}
          />
          <p className={warnings?.companyName ? classes.warning : classes.none}>
            {warnings?.companyName}
          </p>
        </div>

        {/* Email input area */}
        <div className={classes.input}>
          <input
            className="body-text"
            placeholder="*Email"
            id="email"
            type="text"
            name="email"
            onFocus={() => onFocus("email")}
          />
          <p className={warnings?.email ? classes.warning : classes.none}>
            {warnings?.email}
          </p>
        </div>

        {/* Message input area */}
        <div className={classes.input}>
          <textarea
            className="body-text"
            placeholder="*Message"
            id="message"
            name="message"
            rows="5"
            cols="40"
            onFocus={() => onFocus("message")}
          ></textarea>
          <p className={warnings?.message ? classes.warning : classes.none}>
            {warnings?.message}
          </p>
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          className={sending ? "sending" : undefined}
          whileTap={{ scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {/* Changes the text in the button conditionally */}
          {sending ? "Sending..." : "Submit"}
        </motion.button>
      </Form>
    </motion.div>
  );
}
