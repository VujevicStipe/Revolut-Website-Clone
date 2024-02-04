import React, { createContext, useContext, useState, useEffect } from "react";

const windowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <windowSizeContext.Provider value={windowSize}>
      {children}
    </windowSizeContext.Provider>
  );
};

export const useWindowSize = () => {
  const context = useContext(windowSizeContext);

  return context
};
