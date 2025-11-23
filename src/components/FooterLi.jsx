import { NavLink } from "react-router-dom";

export default function FooterLi({ img, url, alt, internal = false }) {
  //internal checks if the url that is to redirect to a page within the website 
  // or if it is supposed to redirect the user to another website
  return internal ? (
    <NavLink to={url} className="footer-link">
      <img src={img} alt={alt} />
    </NavLink>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={alt} />
    </a>
  );
}
