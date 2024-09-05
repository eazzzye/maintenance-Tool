import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.textColor}>
        <p className={utilStyles.bold}>
        A maintenance tool that will help students determine which rooms are open during their zone shifts
        </p>
        <p className={utilStyles.bold}>
        This is a test website/tool that demonstrates the design of what this maintenance tool will accomplish.
        The maintenance tool is a room availability matrix that will show in live time when classrooms are open during a person's given zone shift.
        It will show live times of when classrooms are open and will update accordingly during the day to ensure accuracy.
        This tool is meant to be a guide and helper for student workers who have trouble finding open rooms during their shifts.
        This tool will improve efficiency and planning, as employees will have quicker access to available classrooms,
        allowing more tasks and assignments to be completed.
        </p>
      </section>
      <div>
      <h1 className = {utilStyles.small}>Ohio State Room Avaibility Matrix</h1>
      <p>
        <Link href="/roomMatrix">Room Matrix</Link>
      </p>
    </div>
    <div>
      <h2 className = {utilStyles.small}>Maintenance Checklist</h2>
      <p>
        <Link href="/maintenancePage">Maintenance Page</Link>
      </p>
    </div>
    </Layout>
  );
}