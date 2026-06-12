import PageTitle from '@/_components/PageTitle';
import RecentArticles from '@/_components/RecentArticles';
import getRecentArticles from '@/_lib/api';

export default async function News() {
  const articles = await getRecentArticles();

  return (
    <main className="page">
      <section className="bg-style-1">
        <PageTitle title="Tahuya River Valley Water District News" />
        <div className="page-content flex flex-col justify-center items-center">
          <ul className="article-list">
            {articles.map((article) => (
              <li key={article.id} className="article-item">
                <RecentArticles articles={[article]} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

