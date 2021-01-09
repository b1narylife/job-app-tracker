import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import { Cards } from '../components/Cards';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="container mx-auto py-3">
          <Cards />
        </div>
      </main>
    </div>
  );
};

export default Home;
