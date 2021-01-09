import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import { Cards } from '../components/Cards';

function Home({ data }: any) {
  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="container mx-auto py-3">
          <Cards applications={data} />
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`http://localhost:3000/api/applications`);
  const res = await fetch(
    `https://job-app-tracker.vercel.app/api/applications`,
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
