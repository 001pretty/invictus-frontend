import React, { useState, createContext } from "react";

export const SideDrawerContext = createContext(null);

export const SideDrawerProvider = ({ children }) => {
  const [isOpened, setOpen] = useState(false);

  return (
    <SideDrawerContext.Provider value={{ isOpened, setOpen }}>
      {children}
    </SideDrawerContext.Provider>
  );
};

export default SideDrawerProvider;
