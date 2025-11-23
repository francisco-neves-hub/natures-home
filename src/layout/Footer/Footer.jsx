import classes from "./Footer.module.css";
import { useLocation } from "react-router-dom";
import FooterLi from "../../components/FooterLi.jsx";
import twitterIcon from "../../assets/images/icons/twitter-2.svg";
import facebookIcon from "../../assets/images/icons/facebook-2.svg";
import instagramIcon from "../../assets/images/icons/instagram-2.svg";
import emailIcon from "../../assets/images/icons/email-2.svg";
import searchAlt from "../../assets/images/icons/searchAlt.svg";

export default function Footer() {
  const location = useLocation();
  return (
    <footer className={classes.footer}>
      <ul
        className={
          location.pathname === "/"
            ? `${classes.menu} glass`
            : `${classes.menu} brownGlass`
        }
      >
        <FooterLi
          className={classes.link}
          url="https://www.facebook.com"
          img={facebookIcon}
          alt="Facebook Icon"
        />
        <FooterLi
          className={classes.link}
          url="https://www.instagram.com"
          img={instagramIcon}
          alt="Instagram Icon"
        />
        <FooterLi
          className={classes.link}
          url="https://www.twitter.com"
          img={twitterIcon}
          alt="Twitter Icon"
        />
        <FooterLi
          className={classes.link}
          url="https://www.gmail.com"
          img={emailIcon}
          alt="Email Icon"
        />
        <FooterLi
          className={classes.link}
          url="/cookie-policies"
          img={searchAlt}
          alt="Cookie Icon"
          internal
        />
      </ul>
    </footer>
  );
}
