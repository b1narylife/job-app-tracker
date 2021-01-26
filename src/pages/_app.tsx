import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "react-simple-hook-modal";

import "../styles/global.css";
import "react-simple-hook-modal/dist/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalProvider>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </ModalProvider>
  );
};

export default MyApp;
