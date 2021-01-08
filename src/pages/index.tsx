import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={isDarkMode ? 'bg-gray-800 h-screen' : 'bg-gray-200 h-screen'}
      >
        <header
          className={
            isDarkMode
              ? 'text-gray-200 header py-3 shadow-2xl'
              : 'text-gray-800 header py-3 shadow-2xl'
          }
        >
          <div className="container flex flex-row items-center justify-between mx-auto">
            <div className="branding flex flex-row items-center">
              <img className="mx-2" src="" alt="Logo" />
              <h1 className="mx-2">Job Application Tracker</h1>
            </div>

            <div className="flex flex-row items-center">
              <div className="user mx-2">User</div>
              <div className="settings mx-2">Cog</div>
              <div className="dark-mode mx-2">
                {isDarkMode ? (
                  <button onClick={() => setIsDarkMode(!isDarkMode)}>L</button>
                ) : (
                  <button onClick={() => setIsDarkMode(!isDarkMode)}>D</button>
                )}
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Home;
