import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { ApplicationStages } from '../components/ApplicationStages';

interface Props {
  applicationData: [];
}

function Home({ applicationData }: Props) {
  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="container mx-auto py-3">
          <ApplicationStages data={applicationData} />
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const res = await fetch(
    `https://job-app-tracker.vercel.app/api/applications`,
  );
  const applicationData = await res.json();

  return { props: { applicationData } };
}
