import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="header py-3 bg-gray-800 text-white">
          <div className="container flex flex-row items-center justify-between mx-auto">
            <div className="branding flex flex-row items-center">
              <img className="mx-2" src="" alt="Logo" />
              <h1 className="mx-2">Job Application Tracker</h1>
            </div>

            <div className="flex flex-row items-center">
              <div className="user mx-2">User</div>
              <div className="settings mx-2">Cog</div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}
