import type { AppProps /*, AppContext */ } from "next/app";
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("pointer: course")) {
      setIsTouch(true);
    }
  }, []);

  return (
    <DndProvider
      backend={isTouch ? TouchBackend : HTML5Backend}
      options={{
        enableMouseEvents: true,
      }}
    >
      <Component {...pageProps} />
    </DndProvider>
  );
};

export default MyApp;
