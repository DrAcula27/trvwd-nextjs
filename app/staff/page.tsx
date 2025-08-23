import Image from 'next/image';
import StaffCard from '@/_components/StaffCard';

export default function Staff() {
  return (
    <main className="page">
      <h1 className="title mt-6 p-4 text-center">
        Tahuya River Valley Water District Staff and Commission
      </h1>
      <section className="bg-style-1">
        <div className="page-content">
          <Image
            src="/images/community/waterTower02.jpg"
            alt="Water Tower - Tahuya River Valley Water District"
            width={756}
            height={1008}
            priority
            className="rounded-lg shadow-lg mb-4 sm:mb-0 w-full max-w-md h-auto"
          />
          <StaffCard />
        </div>
      </section>
    </main>
  );
}
