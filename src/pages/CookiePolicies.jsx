import classes from "./CookiePolicies.module.css";
import CookieCard from "../components/CookieCard/CookieCard.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main className="frame">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        Policies
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
        <motion.ul
          className={classes.cards}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <li>
            <CookieCard
              title="Privacy Policy"
              details="We are committed to protecting your personal data and respecting your privacy. This policy outlines how we collect, use, and safeguard your information when you interact with our website.
                        We may collect personal data such as your name, email address, and browsing behavior to improve your experience and provide relevant services. This data is processed securely and is never sold or shared with third parties without your consent, except where required by law.
                        You have the right to access, correct, or delete your personal data at any time. For any questions or requests regarding your privacy, please contact us through the form provided on our website.
                        By using our site, you agree to the terms of this Privacy Policy."
            />
          </li>
          <li>
            <CookieCard
              title="Legal Notice"
              details="This website is owned and operated by Nature's Home. All content, including text, images, graphics, and logos, is protected by intellectual property laws and may not be reproduced or distributed without prior written consent.
We strive to ensure that all information provided on this website is accurate and up to date. However, we do not guarantee the completeness or reliability of the content and disclaim any liability for errors or omissions.
Use of this website is at your own risk. We are not responsible for any damages arising from the use of the site or its content.
By accessing this website, you agree to comply with all applicable laws and regulations."
            />
          </li>
          <li>
            <CookieCard
              title="Cookie Policy"
              details="Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small text files stored on your device that help us understand how you interact with our site.
You can choose to accept or decline cookies. If you decline, some features of the site may not function properly. You can manage your cookie preferences at any time through your browser settings.
By continuing to use our website, you consent to our use of cookies as described in this policy.
For more information about the types of cookies we use and how they affect your experience, please visit our Cookie Policy page."
            />
          </li>
        </motion.ul>
      </motion.div>
    </main>
  );
}
