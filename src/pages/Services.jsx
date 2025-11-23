import classes from "./Services.module.css";
import ServiceCard from "../components/ServiceCard/ServiceCard.jsx";
import planning from "../assets/images/photos/planning.jpg";
import supply from "../assets/images/photos/supply.jpg";
import shop from "../assets/images/photos/shop.jpg";
import construction from "../assets/images/photos/construction.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  const images = [planning, supply, shop, construction];

  //pre-loading images so that the page only loads once they are ready
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
            Services
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
                <ServiceCard
                  img={planning}
                  title="Planning"
                  details="Come down  to the shop and meet our architects that will be more than happy to ear 
            what you have in mind and sketch it for you. Once you see your ideas reflected in a plant, we 
            can move with confidence to the next step."
                />
              </li>
              <li>
                <ServiceCard
                  img={supply}
                  title="Supplyment"
                  details="We are proud owners of a large area of woodlands, tended by us, that provide the wood 
            we use in our houses. Therefore we allow you to take part in one of the most beautiful steps of the 
            process, which is to choose the trees you will have your home made of. We will accompany you and advise 
            you, so you don't feel overwhelmed, but in the end, it's you choice."
                />
              </li>
              <li>
                <ServiceCard
                  img={shop}
                  title="Manufacturing"
                  details="After chopping and sawing the trees, the wood heads to our shop where we cut it and treat it to the 
            shapes and sizes needed for your project. We believe that part of what makes our projects special is the 
            use of classical tools and techniques, for in our craft they mean working with our hands, with each detail 
            beeing hand-crafted."
                />
              </li>
              <li>
                <ServiceCard
                  img={construction}
                  title="Construction"
                  details="We have the plant, we have the materials, now for the fun part, we build it. We have a full team of 
            well trained craftsmen that will take care of making it finally come to life. It is an exciting moment for us 
            and for you and you are welcome to come visit anytime. We'll make sure to have spare helmet just for you!"
                />
              </li>
            </motion.ul>
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
