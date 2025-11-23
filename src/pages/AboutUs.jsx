import classes from "./AboutUs.module.css";
import pimentito from "../assets/images/photos/pimentito.jpg";
import house from "../assets/images/photos/house.jpg";
import hand from "../assets/images/photos/hand.jpg";
import care from "../assets/images/photos/care.jpg";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AboutUs() {
  const [loaded, setLoaded] = useState(false);
  const images = [pimentito, house, hand, care];

  //pre-loads the images in the page before rendering it, resulting in smoother animations
  useEffect(() => {
    async function preLoadImages() {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        });
      });
      await Promise.all(promises);
      setLoaded(true);
    }
    preLoadImages();
  });

  return (
    <main className="frame">
      {loaded ? (
        <>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
          >
            About Us
          </motion.h1>

          {/* WE ARE article */}
          <motion.article
            className={classes.article}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0, delayChildren: 0.3 },
              },
            }}
          >
            <motion.div
              className={classes.photo}
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <img src={pimentito} alt="Siñor Pimentito" />
            </motion.div>
            <motion.div
              className={classes.text}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <h3>WE ARE</h3>
              <p className={`body-text`}>
                a dream come true. Siñor Alberto Pimentito's dream, to be
                precise. Born in 1923, Siñor Pimentito started working early as
                a carpenter, an acquired passion, since in his village, in those
                times, passion was thorughly trampled by opportunity, wich was
                scarce. But passion for the craft grew inside Siñor Pimentito's
                chest and so, as wood chips flew by his head, he held on to a
                wooden dream, to be a maker, a creator, a provider. And with his
                first creation, that we proudly display in our home page, Siñor
                Pimentito created, as well, Nature's Home.
              </p>
            </motion.div>
          </motion.article>

          {/* WE MAKE article */}
          <motion.article
            className={classes.article}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0, delayChildren: 0.3 },
              },
            }}
          >
            <motion.div
              className={classes.text}
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <h3>WE MAKE</h3>
              <p className={`body-text`}>
                houses, homes, dreams come true. What do they all share in
                common? They are natural. The materials, the team, the
                interactions, they all come together naturally and so does the
                final product. In a world where everything is harder, better,
                faster, stronger, we remember the time it takes to think, to
                imagine, to make believe and believe in the making. We take
                pride in our methods and in the inevitable sense of belonging
                our houses offer.
              </p>
            </motion.div>
            <motion.div
              className={classes.photo}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <img src={house} alt="Picture of a house" />
            </motion.div>
          </motion.article>

          {/* WE LOVE article */}
          <motion.article
            className={classes.article}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0, delayChildren: 0.3 },
              },
            }}
          >
            <motion.div
              className={classes.photo}
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <img src={hand} alt="Picture of a hand touching wood" />
            </motion.div>
            <motion.div
              className={classes.text}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <h3>WE LOVE</h3>
              <p className={`body-text`}>
                the feel of the grain, the sound of the logs, the smell of the
                sap. We thrive with the flow of the tool, the touch of the
                marks, the sweep of the dust. We bask in the light of a smile,
                in the truth of a tear, in the strength of a hug. We love doing
                our job and a job well done. That is why our team is made of
                well trained craftsman that keep alive tha techniques of old
                paired with modern tools to bring you authenticity in every
                joint, nook and cranny.
              </p>
            </motion.div>
          </motion.article>

          {/* WE GROW article */}
          <motion.article
            className={`${classes.article} ${classes.last}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0, delayChildren: 0.3 },
              },
            }}
          >
            <motion.div
              className={classes.text}
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <h3>WE GROW</h3>
              <p className={`body-text`}>
                with the planet, because for every tree we cut down, we plant
                two. It's as simple as that. Every member of our team is as much
                a gardener as is a craftsman and that is because we put the
                exact same care in the trees that have fallen and in the trees
                that are still standing.
              </p>
            </motion.div>
            <motion.div
              className={classes.photo}
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <img src={care} alt="Picture of a hand touching wood" />
            </motion.div>
          </motion.article>
        </>
      ) : (
        <div className={classes.load}>
          <h3 className={classes.loading}>Loading...</h3>
        </div>
      )}
    </main>
  );
}
