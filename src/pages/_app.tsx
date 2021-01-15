import type { AppProps /*, AppContext */ } from "next/app";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
  }, []);

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  );
};

export default MyApp;
