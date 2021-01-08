import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-800 h-screen">
        <header className="header py-3 text-white shadow-2xl">
          <div className="container flex flex-row items-center justify-between mx-auto">
            <div className="branding flex flex-row items-center">
              <img className="mx-2" src="" alt="Logo" />
              <h1 className="mx-2">Job Application Tracker</h1>
            </div>

            <div className="flex flex-row items-center">
              <div className="user mx-2">User</div>
              <div className="settings mx-2">Cog</div>
              <div className="dark-mode mx-2">Dark</div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}
