import type { AppProps /*, AppContext */ } from "next/app";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const options = {
    enableTouchEvents: true,
    scrollAngleRanges: [{ start: 300 }, { end: 60 }, { start: 120, end: 240 }],
  };

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsMobile(true);
    }
  }, [isMobile]);

  return (
    <DndProvider
      backend={isMobile ? TouchBackend : HTML5Backend}
      options={options}
    >
      <Component {...pageProps} />
    </DndProvider>
  );
};

export default MyApp;
