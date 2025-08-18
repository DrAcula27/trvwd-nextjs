// components/RecentArticles.tsx
import Image from 'next/image';
import Link from 'next/link';

// Define the article type
interface Article {
  id: string;
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
  slug: string;
  publishedAt: string; // or Date
}

interface RecentArticlesProps {
  articles: Article[];
}

export default function RecentArticles({
  articles,
}: RecentArticlesProps) {
  // Take only the first 4 articles
  const recentArticles = articles.slice(0, 4);

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {recentArticles.map((article) => (
        <article
          key={article.id}
          className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          {/* Mobile: Image on top, Desktop: Image on left */}
          <div className="flex flex-col sm:flex-row">
            {/* Image Container */}
            <div className="relative w-full sm:w-48 h-48 sm:h-32">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm mb-3 line-clamp-3">
                  {truncateText(article.body, 100)}
                </p>
              </div>

              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center font-medium text-sm transition-colors duration-200"
              >
                Read more
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
