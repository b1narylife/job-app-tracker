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
          <div className="container flex flex-row items-center justify-between mx-auto">
            <div className="branding flex flex-row items-center">
              <img
                src=""
                alt="Job Application Tracker"
                style={{ maxWidth: '200px' }}
              />
            </div>

            <div className="flex flex-row items-center">
              <div className="user mx-3">👤</div>
              <div className="settings mx-3">⚙️</div>
              <div className="dark-mode mx-3">
                {darkMode.value ? (
                  <button type="button" onClick={darkMode.disable}>
                    ☀
                  </button>
                ) : (
                  <button type="button" onClick={darkMode.enable}>
                    ☾
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
