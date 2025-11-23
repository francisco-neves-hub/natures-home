import classes from "./Contacts.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import SubmitDialog from "../components/SubmitDialog/SubmitDialog";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useActionData, useNavigation } from "react-router-dom";

export default function ContactUs() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  let status = useActionData();
  const [warnings, setWarnings] = useState(status || {});
  const navigation = useNavigation();

  //checks if the dialog should be opened and handles the warnings' value
  //checks if the email was successfully sent to the user's email address
  //checks if the form data should be reset
  useEffect(() => {
    if (status?.text === "OK") {
      setResetForm(true);
      setOpenDialog(true);
      return;
    } else if (status?.text === "The recipients address is corrupted") {
      setOpenDialog(true);
      return;
    } else {
      setWarnings(status || {});
    }
  }, [setOpenDialog, status]);

  //makes the warning disappear once the user clicks on the input field with the invalid data
  function onFocus(inputField) {
    if (warnings?.[inputField]) {
      setWarnings((prevWarnings) => {
        let newWarnings = { ...prevWarnings };
        newWarnings[inputField] = "";
        return newWarnings;
      });
    }
  }

  //memoized function to set the reset variable value back to false
  const resetHandler = useCallback(() => {
    setResetForm(false);
  }, []);

  return (
    <main className="frame">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        Contacts
      </motion.h1>
      <AnimatePresence initial={false} mode="wait">
        {openDialog && (
          <SubmitDialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            status={status}
            resetHandler={() => resetHandler()}
          />
        )}
      </AnimatePresence>
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
        <motion.section
          className={classes.formSection}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: 0.4,
          }}
        >
          {/*Form*/}
          <ContactForm
            reset={resetForm}
            warnings={warnings}
            sending={navigation.state === "submitting"}
            onFocus={onFocus}
            resetHandler={() => setResetForm(false)}
          />
        </motion.section>
        <section className={classes.infos}>
          <h3>Our info:</h3>
          <p className="body-text">
            Av. Bosque dos Cedros nº8 <br></br>
            2900-300 Setúbal
            <br></br>
            Portugal
          </p>
          <p className="body-text">
            natureshome.mailbox@gmail.com<br></br>
            <br></br>
          </p>
          <p className="body-text">+351 265 265 265</p>
        </section>
      </motion.div>
    </main>
  );
}
