import classes from "../layout/Header/Header.module.css";
import { NavLink } from "react-router-dom";

export default function TopNavLi({ name, url, end }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? classes.active : undefined)}
      to={url}
      end={end}
    >
      {name}
    </NavLink>
  );
}
