import Head from 'next/head';
import useDarkMode from 'use-dark-mode';

const Home = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="py-3 shadow-2xl">
          <div className="container flex flex-row items-center justify-between mx-auto px-3 lg:px-0">
            <div className="branding flex flex-row items-center">
              <h1>Job Application Tracker</h1>
            </div>

            <div className="flex flex-row items-center">
              <div className="user mx-3">👤</div>
              <div className="settings mx-3">⚙️</div>
              <div className="dark-mode mx-3">
                {darkMode.value ? (
                  <button type="button" onClick={darkMode.disable}>
                    <span role="image">☀️</span>
                  </button>
                ) : (
                  <button type="button" onClick={darkMode.enable}>
                    <span role="image">🕶</span>
                  </button>
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
