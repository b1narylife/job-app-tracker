import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DndProvider
      backend={TouchBackend}
      options={{
        enableMouseEvents: true,
        scrollAngleRanges: [
          { start: 300 },
          { end: 60 },
          { start: 120, end: 240 },
        ],
      }}
    >
      <Component {...pageProps} />
    </DndProvider>
  );
};

export default MyApp;
