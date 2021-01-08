import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center">Job Application Tracker</h1>
      </main>
    </div>
  );
}
