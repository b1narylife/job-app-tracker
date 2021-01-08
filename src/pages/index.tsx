import Head from 'next/head';

import Header from '../components/Header';

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
          <h2>Cards</h2>
        </div>
      </main>
    </div>
  );
};

export default Home;
