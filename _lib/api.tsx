// import { Article } from '@/_types/article';

// Example function to fetch articles (adjust based on data source)
export default function getRecentArticles() {
  // Replace this with actual data fetching logic

  const articles = [
    {
      id: '1',
      title: 'Introducing Our New Website',
      body: 'We are thrilled to announce the launch of our website, designed to provide Tahuya River Valley Water District valued customers with easy access to information and resources. Explore our new features and stay updated with the latest news.',
      image: '/images/logos/logo_NoText.png',
      imageAlt: 'Tahuya River Valley Water District Logo',
      slug: 'introducing-new-website',
      publishedAt: '2024-08-15T10:00:00Z',
    },
    {
      id: '2',
      title: 'Market Analysis: Understanding Current Trends',
      body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/images/community/tahuyaRiver02.jpg',
      imageAlt: 'Market analysis charts',
      slug: 'market-analysis-current-trends',
      publishedAt: '2024-03-14T14:30:00Z',
    },
    {
      id: '3',
      title: 'Breaking News: New Technology Revolutionizes Industry',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/images/community/waterTower02.jpg',
      imageAlt: 'Technology innovation',
      slug: 'new-technology-revolutionizes-industry',
      publishedAt: '2024-03-15T10:00:00Z',
    },
    {
      id: '4',
      title: 'Market Analysis: Understanding Current Trends',
      body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/images/community/tahuyaRiver02.jpg',
      imageAlt: 'Market analysis charts',
      slug: 'market-analysis-current-trends',
      publishedAt: '2024-03-14T14:30:00Z',
    },
  ];

  // Sort by publishedAt date (most recent first)
  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime(),
  );
}
