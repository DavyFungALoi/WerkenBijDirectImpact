import { useEffect, useState } from "react";
import Head from "next/head";
import * as contentful from "contentful";
import Job from "../../components/Jobs/Joboverview";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footercontainer/Footer";
const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFULSPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFULAPI,
});

function jobPage() {
  async function fetchJobs() {
    const entries = await client.getEntries({ content_type: "job" });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const allJobs = await fetchJobs();
      console.log(allJobs);
      setJobs([...allJobs]);
    }
    getJobs();
  }, []);

  return (
    <>
      <Head>
        <title>Werken Bij Direct Impact</title>
        <link />
      </Head>

      <div>
        <Navbar />
      </div>
      <div className="joboverview__container">
      <div>Job Overview</div>
      {jobs.length > 0
        ? jobs.map((job) => (
            <Job
              date={job.fields.date}
              key={job.sys.id}
              url={job.fields.url}
              title={job.fields.title}
              location={job.fields.jobLocation}
              categories={job.fields.jobCategory}
            />
          ))
        : null}
        </div>
      <Footer />
    </>
  );
}

export default jobPage;