import { useEffect, useState } from "react";
import Head from "next/head";
import Job from "../components/job";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const allJobs = await fetchEntries();
      setJobs([...allJobs]);
      console.log(allJobs);
    }
    getJobs();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      <div>Hello there</div>
      {jobs.length > 0
        ? jobs.map((job) => (
            <Job
              date={job.fields.jobPublishedDate}
              key={job.fields.jobTitle}
              url={job.fields.url}
            />
          ))
        : null}
    </>
  );
}

export default HomePage;
