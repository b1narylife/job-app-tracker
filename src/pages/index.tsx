import React from "react";
import Head from "next/head";
import Header from "../components/Header";

function Home() {
  const handleSubmit = () => {
    console.log("submitting form...");
  };

  return (
    <div>
      <Head>
        <title>Home - Job Application Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div
          className="container mx-auto py-3 text-center items-center justify-center flex flex-col"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div className="container mx-auto py-3 text-center items-center justify-center flex flex-col">
            <form className="w-72" onSubmit={handleSubmit}>
              <div className="email-input">
                <input
                  className="p-2 my-3 w-full"
                  type="text"
                  name="password"
                  placeholder="email"
                />
              </div>
              <div className="password-input">
                <input
                  className="p-2 my-3 w-full"
                  type="text"
                  name="password"
                  placeholder="password"
                />
              </div>
              <button
                className="py-1 px-6 mt-3 border border-8 border-current"
                type="submit"
                value="submit"
              >
                Login
              </button>
            </form>
          </div>
          <div className="container mt-8 mx-auto py-3 text-center items-center justify-center flex flex-col">
            <div className="registration">
              <p>
                <small>
                  <i>Don't have an account?</i>
                </small>
              </p>
              <button>Sign Up Here</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
