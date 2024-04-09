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

  const getDeviceType = (width) => {
    if (width < 720) {
      return "mobile";
    } else if (width < 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  const deviceType = getDeviceType(windowSize.width);

  return (
    <windowSizeContext.Provider value={{ ...windowSize, deviceType }}>
      {children}
    </windowSizeContext.Provider>
  );
};

export const useWindowSize = () => {
  const context = useContext(windowSizeContext);
  return context;
};
