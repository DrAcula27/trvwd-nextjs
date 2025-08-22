import Image from 'next/image';

export default function News() {
  return (
    <main className="page">
      <h1 className="title mt-6 p-4 text-center">News</h1>
      <section className="bg-style-1">
        <div className="page-content">
          <Image
            src="/images/logos/logo.png"
            alt="Tahuya River Valley Water District"
            width={256}
            height={128}
            priority
          />
        </div>
      </section>
    </main>
  );
}
