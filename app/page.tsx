import MeetingCard from '@/_components/MeetingCard';
import MissionStatementCard from '@/_components/MissionStatementCard';
import PageTitle from '@/_components/PageTitle';
import Link from 'next/link';
import RecentArticles from '@/_components/RecentArticles';
import getRecentArticles from '@/_lib/api';

export default async function Home() {
  const articles = await getRecentArticles();

  return (
    <main className="page">
      {/* Hero */}
      <section className="bg-style-1">
        <PageTitle title="Tahuya River Valley Water District" />
        <div className="home-hero">
          <MeetingCard />

          <MissionStatementCard />
        </div>
      </section>

      {/* Resources */}
      <section className="bg-style-2">
        <div className="section-content">
          <h3 className="subtitle">Our Resources</h3>
          <h2 className="title">
            Tahuya River Valley Water District Resources
          </h2>
          <p>
            Discover valuable information on water management,
            conservation, billing, service requests, and more. Stay
            informed, access forms, and find answers to common
            questions. We are committed to providing you with the
            resources you need for a sustainable water usage
            experience.
          </p>
          <Link href="/resources" className="btn-primary btn-home">
            View Resources
          </Link>
        </div>
      </section>

      {/* News */}
      <section className="bg-style-1">
        <div className="section-content">
          <h2 className="title">Latest News</h2>
          <div className="">
            <RecentArticles articles={articles} />
          </div>
          <Link href="/news" className="btn-primary btn-home">
            View All News
          </Link>
        </div>
      </section>

      {/* Reports */}
      <section className="bg-style-2">
        <div className="section-content">
          <h3 className="subtitle">Tests and Reports</h3>
          <h2 className="title">
            We prioritize your health and safety by delivering clean
            and pure water.
          </h2>
          <p>
            Our comprehensive water quality report ensures
            transparency and adherence to the highest standards.
            Through advanced filtration, rigorous testing, and
            constant monitoring, we guarantee that the water you
            receive is free from contaminants. Trust us to provide you
            with the best water quality for your peace of mind.
          </p>
          <Link href="/reports" className="btn-primary btn-home">
            View Reports
          </Link>
        </div>
      </section>
    </main>
  );
}
