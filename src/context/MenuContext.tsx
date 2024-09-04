"use client";
import { createContext, useState } from "react";

export const MenuContext = createContext<{
  open: boolean;
  toggle: () => void;
}>({
  open: false,
  toggle: () => {},
});

const MenuContextProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    console.log({ open });
    setOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
