// import Image from 'next/image';
import MeetingCard from '@/_components/MeetingCard';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20">
      <section className="">
        {/* meeting card (takes up 1/3 of available width on screens >= 900px, then stacks vertically) with button that links to meetings page */}
        <MeetingCard />
        {/* mission statement card (takes up 2/3 of available width on screens >= 900px, then stacks vertically) with picture of service area and link to PDF of service map */}
      </section>
      <section>
        {/* mentions available resources to those who are residing within the water district with a button that links to the resources page */}
      </section>
      <section>
        {/* mentions current news, showing a grid of the 4 most recent news stories, each with a short snippet and a read more link, with a button that links to the news page */}
      </section>
      <section>
        {/* mentions districts' testing and reporting policies with a button that links to the reports page */}
      </section>
    </main>
  );
}
