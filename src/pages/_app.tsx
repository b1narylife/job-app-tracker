import type { AppProps /*, AppContext */ } from 'next/app';
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> rebase
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  );
}

export default MyApp;
