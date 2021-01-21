import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';


function Login() {
  return (
    <div>
      <Head>
        <title>Login - Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="container mx-auto py-3 text-center items-center justify-center flex" style={{ height: "calc(100vh - 58px)"}}>
          <p>Please login to continue...</p>
        </div>
      </main>
    </div>
  );
}

export default Login;
