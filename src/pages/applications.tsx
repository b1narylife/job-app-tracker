import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { ApplicationsComponent } from "../components/ApplicationsComponent";
import { Application } from "../utils/application";

interface Props {
  applicationData: Application[];
}

function Applications({ applicationData }: Props) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Applications - Job Application Tracker</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="container mx-auto py-3">
            <ApplicationsComponent data={applicationData} />
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Applications;

export async function getServerSideProps() {
  const res = await fetch(
    `https://job-app-tracker.vercel.app/api/applications`
  );
  const applicationData = await res.json();

  return { props: { applicationData } };
}
