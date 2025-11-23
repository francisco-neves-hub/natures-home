import { createContext } from "react";

export const BurgerMenuContext = createContext({
  open: false,
  toggleBurgerMenu: () => {},
  closeBurgerMenu: () => {},
});
