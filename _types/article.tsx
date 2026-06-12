export interface Article {
  id: string;
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
  slug: string;
  publishedAt: string; // or Date
}
