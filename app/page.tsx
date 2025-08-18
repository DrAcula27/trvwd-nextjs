import MeetingCard from '@/_components/MeetingCard';
import MissionStatementCard from '@/_components/MissionStatementCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="page">
      <section className="section-style-1">
        <div className="home-hero">
          <MeetingCard />

          <MissionStatementCard />
        </div>
      </section>
      <section className="section-style-2">
        <div className="home-section">
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
      <section className="section">
        {/* mentions current news, showing a grid of the 4 most recent news stories, each with a short snippet and a read more link, with a button that links to the news page */}
      </section>
      <section className="section">
        {/* mentions districts' testing and reporting policies with a button that links to the reports page */}
      </section>
    </main>
  );
}
