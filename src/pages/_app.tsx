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
      }}
    >
      <Component {...pageProps} />
    </DndProvider>
  );
};

export default MyApp;
