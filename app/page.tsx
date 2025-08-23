import MeetingCard from '@/_components/MeetingCard';
import MissionStatementCard from '@/_components/MissionStatementCard';
import Link from 'next/link';
// import RecentArticles from '@/_components/RecentArticles';

// Example function to fetch articles (adjust based on your data source)
// async function getRecentArticles() {
//   // Replace this with your actual data fetching logic
//   // This could be from a CMS, database, API, etc.

//   const articles = [
//     {
//       id: '1',
//       title: 'Introducing Our New Website',
//       body: 'We are thrilled to announce the launch of our website, designed to provide Tahuya River Valley Water District valued customers with easy access to information and resources. Explore our new features and stay updated with the latest news.',
//       image: '/images/logos/logo_NoText.png',
//       imageAlt: 'Tahuya River Valley Water District Logo',
//       slug: 'introducing-new-website',
//       publishedAt: '2024-08-15T10:00:00Z',
//     },
//     // {
//     //   id: '2',
//     //   title: 'Market Analysis: Understanding Current Trends',
//     //   body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     //   image: '/images/community/tahuyaRiver02.jpg',
//     //   imageAlt: 'Market analysis charts',
//     //   slug: 'market-analysis-current-trends',
//     //   publishedAt: '2024-03-14T14:30:00Z',
//     // },
//     // {
//     //   id: '3',
//     //   title: 'Breaking News: New Technology Revolutionizes Industry',
//     //   body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     //   image: '/images/community/waterTower02.jpg',
//     //   imageAlt: 'Technology innovation',
//     //   slug: 'new-technology-revolutionizes-industry',
//     //   publishedAt: '2024-03-15T10:00:00Z',
//     // },
//     // {
//     //   id: '4',
//     //   title: 'Market Analysis: Understanding Current Trends',
//     //   body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     //   image: '/images/community/tahuyaRiver02.jpg',
//     //   imageAlt: 'Market analysis charts',
//     //   slug: 'market-analysis-current-trends',
//     //   publishedAt: '2024-03-14T14:30:00Z',
//     // },
//   ];

//   // Sort by publishedAt date (most recent first)
//   return articles.sort(
//     (a, b) =>
//       new Date(b.publishedAt).getTime() -
//       new Date(a.publishedAt).getTime()
//   );
// }

export default async function Home() {
  // const articles = await getRecentArticles();

  return (
    <main className="page">
      {/* Hero */}
      <section className="bg-style-2">
        <div className="home-hero">
          <MeetingCard />

          <MissionStatementCard />
        </div>
      </section>

      {/* Resources */}
      <section className="bg-style-1">
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
      {/* <section className="bg-style-2">
        <div className="section-content">
          <h2 className="title">Latest News</h2>
          <div className="">
            <RecentArticles articles={articles} />
          </div>
          <Link href="/news" className="btn-primary btn-home">
            View All News
          </Link>
        </div>
      </section> */}

      {/* Reports */}
      <section className="bg-style-1">
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
