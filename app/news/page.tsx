import PageTitle from '@/_components/PageTitle';

export default function News() {
  return (
    <main className="page">
      <section className="bg-style-1">
        <PageTitle title="Tahuya River Valley Water District News" />
        <div className="page-content flex flex-col justify-center items-center">
          <h2 className="subtitle">Coming Soon!</h2>
          <p>
            Please bear with us as we develop this page. Check back
            regularly for updates!
          </p>
        </div>
      </section>
    </main>
  );
}
