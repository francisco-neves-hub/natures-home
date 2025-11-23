import { BurgerMenuContext } from "./burger-menu-context";
import { useCallback, useState } from "react";

export default function BurgerContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  //function to toggle the burger menu
  const toggleBurgerMenu = () => {
    setOpen(!open);
  };

  //function to specifically close the burger menu
  const closeBurgerMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const ctxValue = {
    open,
    toggleBurgerMenu,
    closeBurgerMenu,
  };

  return <BurgerMenuContext value={ctxValue}>{children}</BurgerMenuContext>;
}
